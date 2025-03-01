import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const link = z.object({
  url: z.string(),
  label: z.string(),
});

const work = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./works" }),
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    year: z.number(),
    keywords: z.array(z.string()),
    background_img: link,
    intro: z.string(),
    videos: z.array(z.string()).optional(),
    concept: z.object({
      title: z.string().optional(),
      content: z.string().optional(),
    }).optional(),
    imgs: z.array(link),
  }),
});

export const collections = { work };
