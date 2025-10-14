import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { Octokit } from 'octokit';

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
	contributors: defineCollection({
		// @ts-expect-error type narrowing not applying to filter, loader expects id to be defined
		loader: async () => {
			if (process.env.VERCEL_ENV !== 'production') {
				return Array.from({ length: 100 }).map((_, index) => ({
					id: String(index),
					html_url: `https://github.com/user-${index}`,
					avatar_url: `https://picsum.photos/100?random=${index}`,
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
