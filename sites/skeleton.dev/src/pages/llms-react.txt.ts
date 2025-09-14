import type { APIRoute } from 'astro';
import { generateDocumentation } from 'src/lib/generate-llm';

export const GET: APIRoute = async () => {
	const content = await generateDocumentation('react');
	return new Response(content, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
