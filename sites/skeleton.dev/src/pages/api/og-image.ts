import SkeletonBlueprint from '@/modules/skeleton-blueprint';
import { Resvg } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import satori, { type SatoriOptions } from 'satori';

const weights = [300, 500, 600] as const;

async function loadRobotoFonts() {
	const fonts: SatoriOptions['fonts'] = [];

	for (const weight of weights) {
		const url = `https://cdn.jsdelivr.net/fontsource/fonts/roboto@latest/latin-${weight}-normal.ttf`;
		const res = await fetch(url);
		if (!res.ok) throw new Error(`Failed to fetch font: ${url}`);
		const arrayBuffer = await res.arrayBuffer();
		fonts.push({
			name: 'Roboto',
			data: arrayBuffer,
			style: 'normal',
			weight,
		});
	}

	return fonts;
}

const satoriOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	fonts: await loadRobotoFonts(),
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
