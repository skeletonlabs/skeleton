import { getMarkdownFromDoc } from '@/modules/llms';
import { commonSections } from '@/modules/navigation';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
	return new Response(
		`# Skeleton Documentation\n\n${commonSections.map((section) => `## ${section.label}\n\n${section.items.map(getMarkdownFromDoc).join('\n')}`).join('\n')}`,
		{
			headers: {
				'Content-Type': 'text/plain',
			},
		},
	);
};
