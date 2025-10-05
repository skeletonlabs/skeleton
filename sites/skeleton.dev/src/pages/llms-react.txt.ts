import { generateDocumentation } from '@/lib/llms';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const content = await generateDocumentation('react');
	return new Response(content, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
