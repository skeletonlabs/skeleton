import { getCollection } from '@/modules/content';
import { getMarkdownFromDoc } from '@/modules/llms/get-markdown-from-doc';
import type { APIRoute } from 'astro';

export async function getStaticPaths() {
	const frameworks = await getCollection('frameworks');
	const docs = await getCollection('docs');
	return frameworks.flatMap((framework) =>
		docs.map((doc) => ({
			params: {
				framework: framework.id,
				doc: doc.id,
			},
			props: {
				framework,
				doc,
			},
		})),
	);
}

export const GET: APIRoute = async (context) => {
	return new Response(getMarkdownFromDoc(context, context.props.doc, [context.props.framework]), {
		headers: {
			'Content-Type': 'text/plain',
		},
	});
};
