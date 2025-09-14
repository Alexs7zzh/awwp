export const LOCALES = ["en", "ja"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isSupportedLocale(x?: string | null): x is Locale {
  return !!x && (LOCALES as readonly string[]).includes(x as Locale);
}

export function withLang(pathname: string, lang: Locale) {
  const segs = pathname.split("/");
  if (isSupportedLocale(segs[1])) {
    segs[1] = lang;
    return segs.join("/");
  }
  return pathname === "/" ? `/${lang}/` : `/${lang}${pathname}`;
}
