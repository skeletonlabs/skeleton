import { generateFrameworkText } from '@/lib/llms';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const text = await generateFrameworkText('react');
	return new Response(text, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
