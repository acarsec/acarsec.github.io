import { z } from 'zod';
import { categoryIds, contentTypes, platformIds } from '../data/taxonomy';
import { validPermalink } from './urls';
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value, 'Valid ISO calendar date required');
const permalink = z.string().refine(validPermalink, 'Internal absolute path with trailing slash required');
const base = {
  title: z.string().min(1), description: z.string().min(1).max(500), publishedAt: isoDate,
  tags: z.array(z.string().min(1)).default([]), lang: z.enum(['en', 'tr']).default('en'), draft: z.boolean().default(false), permalink,
};
const study = {
  categories: z.array(z.enum(categoryIds)).min(1), tools: z.array(z.string()).default([]),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(), durationMinutes: z.number().positive().optional(),
};
export const publicationSchema = z.object({
  ...base, ...study, contentId: z.string().min(1), updatedAt: isoDate.optional(), contentType: z.enum(contentTypes), featured: z.boolean().default(false),
  image: z.string().regex(/^\/assets\//).optional(), imageAlt: z.string().optional(), platform: z.enum(platformIds).optional(), relatedLabId: z.string().optional(),
  mitreAttack: z.array(z.string().regex(/^T\d{4}(\.\d{3})?$/)).default([]), iocs: z.array(z.object({ type: z.string(), value: z.string(), context: z.string().optional() })).default([]), comments: z.boolean().default(true),
}).refine(data => !data.image || !!data.imageAlt?.trim(), 'imageAlt is required when image is supplied');
export const labSchema = z.object({ ...base, ...study, labId: z.string().min(1), platform: z.enum(platformIds), labStatus: z.enum(['completed', 'in-progress']), challengeUrl: z.url().optional(), relatedWriteupId: z.string().optional() });
export const projectSchema = z.object({ ...base, projectId: z.string().min(1), updatedAt: isoDate.optional(), featured: z.boolean().default(false), status: z.enum(['active', 'in-progress', 'archived']), repoUrl: z.url().optional(), demoUrl: z.url().optional(), tools: z.array(z.string()).default([]), severity: z.string().optional(), cveId: z.string().regex(/^CVE-\d{4}-\d+$/).optional() });
