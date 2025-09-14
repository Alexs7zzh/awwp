import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://awwp.vercel.com",
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
    routing: "manual",
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          ja: "ja-JP",
        },
      },
      filter: (page) => page !== "https://awwp.vercel.com/",
      serialize(item) {
        const u = new URL(item.url);
        const unlocalized =
          u.pathname.replace(/^\/(?:en|ja)(?=\/|$)/, "") || "/";
        const xDefault = new URL(`/en${unlocalized}`, u.origin).toString();

        const existing = new Map(
          (item.links ?? []).map((l) => [l.lang, l.url]),
        );
        existing.set("x-default", xDefault);

        item.links = Array.from(existing, ([lang, url]) => ({ lang, url }));
        return item;
      },
    }),
  ],
});
