import { defineCollection, z } from "astro:content";

const snippets = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    type: z.string(),
    tags: z.array(z.string()),
    createdAt: z.union([z.string(), z.date()]),
    updatedAt: z.union([z.string(), z.date()]),
  }),
});

export const collections = { snippets };
