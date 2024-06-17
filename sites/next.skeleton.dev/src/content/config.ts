import { z, defineCollection } from 'astro:content';

const docs = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional().default('(Title)'),
		description: z.string().optional().default('(Description)'),
		srcSvelte: z.string().optional(),
		srcReact: z.string().optional(),
		srcAlly: z.string().optional(),
		showDocsUrl: z.boolean().optional().default(false),
		order: z.number().optional().default(0)
	})
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({})
});

export const collections = { docs, blog };
