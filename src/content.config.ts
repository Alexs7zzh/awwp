import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/[^_]*.yaml", base: "./works" }),
  schema: () => {
    return z.object({
      title: z.string(),
      year: z.number(),
      keywords: z.array(z.string()),
      description_jp: z.string(),
      meta_jp: z.string(),
    });
  },
});

export const collections = { work };
