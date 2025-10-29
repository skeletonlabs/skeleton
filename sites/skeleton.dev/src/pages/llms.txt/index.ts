import { getCollection } from '@/modules/content';
import { getMarkdownFromDoc } from '@/modules/llms/get-markdown-from-doc';
import { commonSections } from '@/modules/navigation';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const frameworks = await getCollection('frameworks');

	return new Response(
		commonSections.map((section) => section.docs.map((doc) => getMarkdownFromDoc(doc, frameworks)).join('\n')).join('\n'),
		{
			headers: {
				'Content-Type': 'text/plain',
			},
		},
	);
};
