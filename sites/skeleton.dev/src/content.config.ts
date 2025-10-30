import { componentDocumentationLoader } from './modules/component-documentation';
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { Octokit } from 'octokit';

export const collections = {
	frameworks: defineCollection({
		loader: glob({
			base: './src/content/frameworks',
			pattern: '*.json',
		}),
		schema: z.object({
			name: z.string().nonempty(),
			logo: z.string().nonempty(),
			default: z.boolean().optional().default(false),
		}),
	}),
	docs: defineCollection({
		loader: glob({
			base: './src/content/docs',
			pattern: '**/*.{md,mdx}',
		}),
		schema: z.object({
			title: z.string().nonempty(),
			description: z.string().nonempty(),
			summary: z.string().optional(),
			features: z.array(z.string()).optional(),
			stability: z.enum(['alpha', 'beta', 'stable']).optional().default('stable'),
			order: z.number().nonnegative().optional().default(0),
			tags: z.array(z.string()).optional().default([]),
			references: z
				.object({
					source: z.union([z.string().url(), z.literal(false)]).optional(),
					styles: z.union([z.string().url(), z.literal(false)]).optional(),
					a11y: z.union([z.string().url(), z.literal(false)]).optional(),
					zag: z.union([z.string().url(), z.literal(false)]).optional(),
				})
				.optional()
				.default({}),
		}),
	}),
	contributors: defineCollection({
		loader: async () => {
			if (process.env.VERCEL_ENV !== 'production') {
				return Array.from({ length: 100 }).map((_, index) => ({
					id: String(index),
					html_url: `https://github.com/user-${index}`,
					avatar_url: `https://picsum.photos/100`,
					login: `user-${index}`,
				}));
			}
			const octokit = new Octokit();
			const response = await octokit.rest.repos.listContributors({
				owner: 'skeletonlabs',
				repo: 'skeleton',
				per_page: 100,
			});
			return response.data
				.filter((contributor) => !!contributor.id)
				.map((contributor) => ({
					...contributor,
					id: String(contributor.id),
				}));
		},
		schema: z.object({
			html_url: z.string().url(),
			avatar_url: z.string().url(),
			login: z.string(),
		}),
	}),
	'showcase-projects': defineCollection({
		loader: glob({
			base: './src/content/showcase-projects',
			pattern: '*.json',
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
	'component-documentation': defineCollection({
		loader: import.meta.env.PROD ? componentDocumentationLoader : async () => [],
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
