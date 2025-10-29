import { getMarkdownFromDoc } from '@/modules/llms/get-markdown-from-doc';
import { commonSections } from '@/modules/navigation';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
	return new Response(commonSections.map((section) => section.items.map(getMarkdownFromDoc).join('\n')).join('\n'), {
		headers: {
			'Content-Type': 'text/plain',
		},
	});
};
