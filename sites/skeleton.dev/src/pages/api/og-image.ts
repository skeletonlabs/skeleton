import SkeletonBlueprint from '@/modules/skeleton-blueprint';
import { Resvg } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import satori, { type SatoriOptions } from 'satori';

const roboto = await fetch('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf').then((res) => res.arrayBuffer());

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
