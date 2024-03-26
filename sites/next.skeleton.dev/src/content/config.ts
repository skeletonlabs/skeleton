import { z, defineCollection } from 'astro:content';

const docs = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional().default('(Title)'),
		order: z.number().optional().default(0),
	}),
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({}),
});

export const collections = { docs, blog };
