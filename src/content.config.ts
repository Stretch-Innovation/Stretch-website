import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    sector: z.enum(['Food', 'Construction', 'Telecom', 'Tech', 'Beverage', 'Other']),
    service: z.array(
      z.enum([
        'Growth Readiness',
        'Growth Generation',
        'Growth Conversion',
        'Growth Acceleration',
        'Account Based Marketing',
      ])
    ),
    headline_result: z.string(),
    challenge: z.string(),
    approach: z.string(),
    result: z.string(),
    featured: z.boolean().default(false),
    cover_image: z.string().optional(),
    pdf_download: z.string().optional(),
    date: z.coerce.date(),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    intro: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    cover_image: z.string().optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { cases, insights, team };
