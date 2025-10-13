import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
	const frameworks = await getCollection('frameworks');

	return Response.json(
		frameworks.map((framework) => ({
			id: framework.id,
			...framework.data,
		})),
	);
};
