import { getCollection } from '@/modules/content';
import { getMarkdownFromDoc } from '@/modules/llms/get-markdown-from-doc';
import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';

export async function getStaticPaths() {
	const frameworks = await getCollection('frameworks');
	const docs = await getCollection('docs');
	return frameworks.flatMap((framework) =>
		docs.map((doc) => ({
			params: {
				framework: framework.id,
				doc: doc.id,
			},
		})),
	);
}

export const GET: APIRoute = async (context) => {
	if (!context.params.doc) {
		return new Response('Documentation not found', {
			status: 404,
		});
	}
	const doc = await getEntry('docs', context.params.doc);
	if (!doc) {
		return new Response('Documentation not found', {
			status: 404,
		});
	}
	return new Response(getMarkdownFromDoc(doc), {
		headers: {
			'Content-Type': 'text/plain',
		},
	});
};
