import { generateTextFromEntry } from '@/lib/llms-txt';
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

export const getStaticPaths = (async () => {
	const entries = await getCollection('docs', (page) => !page.id.endsWith('/meta'));
	return entries.map((entry) => ({
		params: {
			slug: entry.id,
		},
		props: {
			entry: entry,
		},
	}));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async (context) => {
	const text = await generateTextFromEntry(context.props.entry);

	return new Response(text, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
