// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  prefetch: {
    defaultStrategy: "viewport",
  },
  integrations: [sitemap(), mdx()],
});
