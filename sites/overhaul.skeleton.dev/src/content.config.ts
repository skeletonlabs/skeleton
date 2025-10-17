import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { Octokit } from 'octokit';

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
	contributors: defineCollection({
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
};
