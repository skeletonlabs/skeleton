import { generateSinglePageDocumentation } from '@/lib/llms';
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, getEntry } from 'astro:content';

export const getStaticPaths = (async () => {
	const pages = await getCollection('docs');
	return pages.map((page) => ({
		params: {
			slug: page.id,
		},
		props: {
			page: page,
		},
	}));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
	const { page } = props as { page: Awaited<ReturnType<typeof getCollection<'docs'>>>[number] };

	// Check if this is a component or integration that has a meta entry
	const hasMeta = ['components/', 'integrations/'].some((id) => page.id.startsWith(id));
	const metaEntry = hasMeta ? await getEntry('docs', page.id.replace(/\/[^/]*$/, '/meta')) : undefined;

	// Generate the documentation
	const content = await generateSinglePageDocumentation(page, metaEntry);

	return new Response(content, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
