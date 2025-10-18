import { defineAction } from 'astro:actions';
import { getCollection } from 'astro:content';
import { z } from 'astro:schema';

const frameworks = await getCollection('frameworks');

export const server = {
	setFramework: defineAction({
		input: z.enum(frameworks.map((framework) => framework.id) as [string, ...string[]]),
		handler: async (framework, context) => {
			context.cookies.set('framework', framework, {
				path: '/',
				expires: new Date('9999-12-31'),
			});
		},
	}),
};
