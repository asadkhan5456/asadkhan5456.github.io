import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
    status: z.enum(['in progress', 'released', 'archived']),
    summary: z.string(),
    repo: z.string().url().optional(),
    // Only link the repository once it is public.
    repoPublic: z.boolean().default(false),
    stack: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    // Drafts are never built or listed.
    draft: z.boolean().default(true),
  }),
});

export const collections = { 'case-studies': caseStudies, projects, posts };
