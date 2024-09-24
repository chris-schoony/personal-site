import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
  }),
});

export const collections = {
  posts,
};
