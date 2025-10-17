import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	frameworks: defineCollection({
		loader: glob({ pattern: '*.json', base: './src/content/frameworks' }),
		schema: z.object({
			name: z.string().nonempty(),
			logo: z.string().nonempty(),
		}),
	}),
	docs: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
		schema: z.object({
			title: z.string().nonempty(),
			description: z.string().nonempty(),
		}),
	}),
};
