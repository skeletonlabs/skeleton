import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	frameworks: defineCollection({
		loader: glob({ pattern: '*.json', base: './src/content/frameworks' }),
		schema: z.object({
			name: z.string().min(2).max(100),
			description: z.string().max(500).optional(),
			documentation: z.string().url().optional(),
		}),
	}),
	docs: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
		}),
	}),
};
