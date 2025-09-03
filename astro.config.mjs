// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  prefetch: {
    defaultStrategy: "viewport",
  },
  site: "https://akirawakita.com",
  integrations: [sitemap()],
});
