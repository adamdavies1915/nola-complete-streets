import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const source = z.object({ label: z.string(), url: z.string() });
const common = {
  title: z.string(), description: z.string(), published: z.boolean().default(true),
  order: z.number().default(0), sources: z.array(source).default([]),
  updated: z.string().optional(),
};
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({ ...common, view: z.enum(['article','hub','members','involved','certification','routes','projects','research','plans','campaigns','current','past','storymap']).default('article'),
    parent: z.string().default('/'), parentLabel: z.string().default('Home'),
    image: z.string().optional(), imageAlt: z.string().optional(),
    links: z.array(z.object({ title: z.string(), description: z.string(), href: z.string() })).default([]),
  }),
});
const campaigns = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/campaigns' }),
  schema: z.object({ ...common, status: z.enum(['current','past']), image: z.string().optional(), imageAlt: z.string().optional(), period: z.string(), }),
});
const resources = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/resources' }),
  schema: z.object({ ...common, category: z.enum(['plan','research']), url: z.string().url(), publisher: z.string(), dateLabel: z.string().optional(), }),
});
const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: z.object({ ...common, agency: z.string(), url: z.string().url(), location: z.string(), status: z.string(), }),
});
const members = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/members' }),
  schema: z.object({ name: z.string(), role: z.string().optional(), organization: z.string().optional(), type: z.enum(['organization','executive']), url: z.string().url().optional(), logo: z.string().optional(), published: z.boolean().default(false), order: z.number().default(0), verified: z.string().optional() }),
});
const events = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/events' }),
  schema: z.object({ ...common, start: z.string().datetime({ offset: true }), end: z.string().datetime({ offset: true }), status: z.enum(['scheduled','cancelled']), location: z.string(), address: z.string(), }).refine(e => new Date(e.end) > new Date(e.start), 'Event end must be after start'),
});
export const collections = { pages, campaigns, resources, projects, members, events };
