import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	docs: defineCollection({
		loader: glob({
			base: './src/content/docs',
			pattern: ['**/*.mdx', '!**/_*.mdx'],
		}),
		schema: z.object({
			title: z.string().optional().default('(Title)'),
			description: z.string().optional().default('(Description)'),
			srcCore: z.string().optional(),
			srcCss: z.string().optional(),
			srcSvelte: z.string().optional(),
			srcReact: z.string().optional(),
			srcAlly: z.string().optional(),
			srcZag: z.string().optional(),
			stability: z.enum(['alpha', 'beta', 'stable']).optional().default('stable'),
			showDocsUrl: z.boolean().optional().default(false),
			pubDate: z.date().optional(),
			tags: z.array(z.string()).optional(),
			order: z.number().optional().default(0),
		}),
	}),
	'showcase-projects': defineCollection({
		loader: glob({
			base: './src/content/showcase-projects',
			pattern: '**/*.json',
		}),
		schema: z.object({
			name: z.string(),
			description: z.string(),
			url: z.string(),
			playwright: z
				.object({
					instructions: z.array(z.string()),
				})
				.optional(),
		}),
	}),
	types: defineCollection({
		loader: glob({
			base: './src/content/types',
			pattern: '**/*.json',
		}),
		schema: z.object({
			name: z.string(),
			types: z.array(
				z.object({
					name: z.string(),
					props: z.array(
						z.object({
							name: z.string(),
							type: z.string(),
							typeKind: z.string(),
							optional: z.boolean(),
							JSDoc: z.object({
								description: z.string().nullable(),
								tags: z.array(
									z.object({
										name: z.string(),
										value: z.string().nullable(),
									}),
								),
							}),
						}),
					),
					metadata: z.object({
						classValue: z.string().optional(),
					}),
				}),
			),
		}),
	}),
};
