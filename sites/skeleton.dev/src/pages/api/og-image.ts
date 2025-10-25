import SkeletonBlueprint from '@/modules/skeleton-blueprint';
import { Resvg } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import { readFile } from 'fs/promises';
import satori, { type SatoriOptions } from 'satori';

const roboto = await readFile(new URL('../../assets/fonts/Roboto-Regular.ttf', import.meta.url));

const satoriOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	fonts: [
		{
			name: 'Roboto',
			data: roboto,
		},
	],
};

export const prerender = false;

export const GET: APIRoute = async (context) => {
	const svg = await satori(SkeletonBlueprint({ text: context.url.searchParams.get('text') ?? '' }), satoriOptions);

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: 1200,
		},
		background: 'transparent',
	});

	return new Response(new Uint8Array(resvg.render().asPng()), {
		headers: {
			'Content-Type': 'image/png',
		},
	});
};
