import { getCollection } from '@/modules/content';
import { getMarkdownFromDoc } from '@/modules/llms/get-markdown-from-doc';
import { commonSections } from '@/modules/navigation';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
	const frameworks = await getCollection('frameworks');
	return new Response(
		commonSections
			.map((section) =>
				section.docs
					.map((doc) =>
						getMarkdownFromDoc(doc, {
							url: context.url,
							params: context.params,
							frameworks,
						}),
					)
					.join('\n'),
			)
			.join('\n'),
		{
			headers: {
				'Content-Type': 'text/plain',
			},
		},
	);
};
