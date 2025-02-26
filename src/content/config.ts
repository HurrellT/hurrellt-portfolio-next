import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    link: z.string().url(),
    sourcecode: z.string().url(),
    linkAvailable: z.boolean(),
    sourcecodeAvailable: z.boolean(),
  }),
});

const personalProjects = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    link: z.string().url(),
    sourcecode: z.string().url(),
    linkAvailable: z.boolean(),
    sourcecodeAvailable: z.boolean(),
  }),
});

const jobs = defineCollection({
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = { projects, jobs, personalProjects };
