import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
	const components = await getCollection('docs', (docs) => docs.id.startsWith('framework-components/'));

	return Response.json(
		components.map((component) => ({
			id: component.id.split('/').at(-1),
			...component.data,
		})),
	);
};
