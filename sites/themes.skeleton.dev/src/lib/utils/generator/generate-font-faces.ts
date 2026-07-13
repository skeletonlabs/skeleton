// Utility: Generate Font Faces
// Generates @font-face CSS for custom Fontsource fonts, for live preview.
import { settingsCustomFonts } from '$lib/state/generator.svelte';
import type { CustomFont } from '$lib/state/types';

function buildFontFaceBlock(font: CustomFont): string {
	if (font.isVariableOnly) {
		return font.styles
			.map(
				(style) => `@font-face {
	font-family: '${font.family}';
	font-style: ${style};
	font-weight: 1 1000;
	font-display: swap;
	src: url('https://cdn.jsdelivr.net/fontsource/fonts/${font.id}:vf@latest/${font.defSubset}-wght-${style}.woff2') format('woff2-variations');
	unicode-range: ${font.unicodeRange};
}`,
			)
			.join('\n\n');
	}
	return font.variants
		.map(
			(variant) => `@font-face {
	font-family: '${font.family}';
	font-style: ${variant.style};
	font-weight: ${variant.weight};
	font-display: swap;
	src: url('${variant.woff2}') format('woff2');
	unicode-range: ${font.unicodeRange};
}`,
		)
		.join('\n\n');
}

export function generateFontFaces(): string {
	const fonts = [settingsCustomFonts.font1, settingsCustomFonts.font2].filter((f): f is CustomFont => f !== null);
	const seen = new Set<string>();
	const unique = fonts.filter((f) => (seen.has(f.id) ? false : (seen.add(f.id), true)));
	return unique.map(buildFontFaceBlock).join('\n\n');
}
