import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { publicationSchema, labSchema, projectSchema } from './lib/schemas';
export const collections = {
  publications: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/publications' }), schema: publicationSchema }),
  labs: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/labs' }), schema: labSchema }),
  projects: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/projects' }), schema: projectSchema }),
};
