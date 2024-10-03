import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    link: z.string().url(),
    sourcecode: z.string().url(),
  }),
});

export const collections = { projects };