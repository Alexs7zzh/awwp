import { defineMiddleware, sequence } from "astro:middleware";
import { middleware as astroI18n } from "astro:i18n";
import type { AstroCookies } from "astro";
import {
  isSupportedLocale,
  withLang,
  DEFAULT_LOCALE,
  type Locale,
} from "@lib/i18n";

const LANG_COOKIE = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

function isSkippablePath(pathname: string) {
  if (pathname.startsWith("/_astro/")) return true;
  if (/\.[a-z0-9]+$/i.test(pathname)) return true;
  return false;
}

function pickFromAcceptLanguage(
  header: string | null | undefined,
): Locale | null {
  if (!header) return null;
  const candidates = header
    .split(",")
    .map((raw) => {
      const [tag, qStr] = raw.trim().split(";q=");
      const base = tag.split("-")[0].toLowerCase();
      const q = qStr ? parseFloat(qStr) : 1;
      return { base, q: Number.isFinite(q) ? q : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const c of candidates)
    if (isSupportedLocale(c.base)) return c.base as Locale;
  return null;
}

function setLangCookie(cookies: AstroCookies, lang: Locale) {
  cookies.set(LANG_COOKIE, lang, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
    secure: true,
    httpOnly: true,
  });
}

const languageRouter = defineMiddleware(async (ctx, next) => {
  const { url, cookies, request } = ctx;
  const { pathname, search } = url;

  if (isSkippablePath(pathname)) return next();

  const [, maybeLang] = pathname.split("/");
  const explicitLocale = isSupportedLocale(maybeLang)
    ? (maybeLang as Locale)
    : null;

  // 1) explicit URL wins (+ remember)
  if (explicitLocale) {
    setLangCookie(cookies, explicitLocale);
    ctx.locals.lang = explicitLocale; // typed via src/env.d.ts
    return next();
  }

  // 2) cookie
  const cookieLocale = cookies.get(LANG_COOKIE)?.value;
  if (isSupportedLocale(cookieLocale)) {
    return ctx.redirect(
      withLang(pathname, cookieLocale as Locale) + (search || ""),
      307,
    );
  }

  // 3) browser preference
  const headerLocale = pickFromAcceptLanguage(
    request.headers.get("accept-language"),
  );
  if (headerLocale) {
    setLangCookie(cookies, headerLocale);
    return ctx.redirect(withLang(pathname, headerLocale) + (search || ""), 307);
  }

  // 4) default
  setLangCookie(cookies, DEFAULT_LOCALE);
  return ctx.redirect(withLang(pathname, DEFAULT_LOCALE) + (search || ""), 307);
});

export const onRequest = sequence(
  languageRouter,
  astroI18n({
    prefixDefaultLocale: true,
    redirectToDefaultLocale: false,
    fallbackType: "redirect",
  }),
);
