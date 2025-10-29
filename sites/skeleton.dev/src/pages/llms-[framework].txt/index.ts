import { getCollection } from '@/modules/content';
import { getMarkdownFromDoc } from '@/modules/llms/get-markdown-from-doc';
import { commonSections } from '@/modules/navigation';
import type { APIRoute } from 'astro';

export async function getStaticPaths() {
	const frameworks = await getCollection('frameworks');
	return frameworks.map((framework) => ({
		params: {
			framework: framework.id,
		},
	}));
}

// TODO: Prune sections based on framework param
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
