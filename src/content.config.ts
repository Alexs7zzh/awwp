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
      description_en: z.string(),
      meta_jp: z.string(),
      meta_en: z.string(),
      footer: z.string().optional(),
      pin: z.array(z.string()).optional(),
      videos: z.array(z.string()).optional(),
    });
  },
});

export const collections = { work };
