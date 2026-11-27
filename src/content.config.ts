import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One file per language: src/content/case-studies/<lang>/<slug>.md
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    order: z.number(),
    summary: z.string(),
    diagram: z.enum(['doc-platform', 'mcp', 'fabric', 'voice']),
    diagramAlt: z.string(),
    context: z.string(),
    problem: z.string(),
    approach: z.array(z.string()),
    role: z.string(),
    outcome: z.string(),
    stack: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    status: z.object({ de: z.string(), en: z.string() }),
    summary: z.object({ de: z.string(), en: z.string() }),
    repo: z.string().url().optional(),
    // Only link the repository once it is public.
    repoPublic: z.boolean().default(false),
    stack: z.array(z.string()).default([]),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.object({ de: z.string(), en: z.string() }),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    // Drafts get no page; the home page only lists their title as "coming soon".
    draft: z.boolean().default(true),
  }),
});

export const collections = { 'case-studies': caseStudies, projects, posts };
