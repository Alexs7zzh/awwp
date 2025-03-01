import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./works" }),
  schema: z.object({
    title: z.string(),
    start_year: z.number(),
    end_year: z.number(),
    thumbnail: z.string(),
  }),
});

export const collections = { work };
