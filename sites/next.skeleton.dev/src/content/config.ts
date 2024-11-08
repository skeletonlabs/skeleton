import { z, defineCollection } from 'astro:content';

const docs = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional().default('(Title)'),
		description: z.string().optional().default('(Description)'),
		srcSvelte: z.string().optional(),
		srcReact: z.string().optional(),
		srcAlly: z.string().optional(),
		srcZag: z.string().optional(),
		showDocsUrl: z.boolean().optional().default(false),
		order: z.number().optional().default(0)
	})
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({})
});

const schemas = defineCollection({
	type: 'data',
	schema: z.array(
		z.object({
			name: z.string(),
			properties: z.array(
				z.object({
					name: z.string(),
					type: z.string(),
					typeKind: z.string(),
					required: z.boolean(),
					documentation: z.object({
						text: z.string().nullable(),
						tags: z.array(
							z.object({
								name: z.string(),
								value: z.string()
							})
						)
					})
				})
			)
		})
	)
});

export const collections = { docs, blog, schemas };
