import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./works" }),
  schema: ({ image }) => {

    const ImageData = z.object({
      url: image(),
      label: z.string(),
    });

    return z.object({
      title: z.string(),
      thumbnail: image(),
      has_video: z.boolean().optional(),
      year: z.number(),
      keywords: z.array(z.string()),
      background_img: ImageData,
      intro: z.string(),
      videos: z.array(z.string()).optional(),
      concept: z.object({
        title: z.string().optional(),
        content: z.string().optional(),
      }).optional(),
      imgs: z.array(ImageData),
    })
  }
});

export const collections = { work };
