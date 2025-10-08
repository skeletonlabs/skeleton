import { generateTextFromFramework } from '@/lib/llms-txt';
import type { APIRoute, GetStaticPaths } from 'astro';

export const getStaticPaths = (async () => {
	return [{ params: { framework: 'react' } }, { params: { framework: 'svelte' } }];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async (ctx) => {
	if (!ctx.params.framework) {
		return new Response('Framework not specified', { status: 400 });
	}
	const text = await generateTextFromFramework(ctx.params.framework);
	return new Response(text, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
