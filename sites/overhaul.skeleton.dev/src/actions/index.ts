import { defineAction } from 'astro:actions';
import { getCollection } from 'astro:content';
import { z } from 'astro:schema';

const frameworks = await getCollection('frameworks');

export const server = {
	setFramework: defineAction({
		accept: 'form',
		input: z.object({
			framework: z.enum(frameworks.map((framework) => framework.id) as [string, ...string[]]),
		}),
		handler: async (data, context) => {
			context.cookies.set('framework', data.framework, {
				path: '/',
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
			});
		},
	}),
};
