import SkeletonBlueprint from '@/modules/skeleton-blueprint';
import { Resvg } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import satori, { type SatoriOptions } from 'satori';

function getRobotoFonts() {
	return Promise.all(
		[300, 500, 600].map(async (weight) => {
			const url = `https://cdn.jsdelivr.net/fontsource/fonts/roboto@latest/latin-${weight}-normal.ttf`;
			const res = await fetch(url);
			if (!res.ok) throw new Error(`Failed to fetch font: ${url}`);
			const arrayBuffer = await res.arrayBuffer();
			return {
				name: 'Roboto',
				data: arrayBuffer,
				style: 'normal' as const,
				weight: weight as SatoriOptions['fonts'][number]['weight'],
			};
		}),
	);
}

const satoriOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	fonts: await getRobotoFonts(),
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
