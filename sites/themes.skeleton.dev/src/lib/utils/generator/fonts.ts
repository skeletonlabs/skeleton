// Utility: Fontsource
// Parses/fetches custom fonts from the Fontsource API for the theme generator.
import type { CustomFont, CustomFontVariant } from '$lib/state/types';

interface FontsourceApiVariantsUrl {
	woff2: string;
	woff: string;
	ttf: string;
}
type FontsourceApiVariants = Record<string, Record<string, Record<string, { url: FontsourceApiVariantsUrl }>>>;

interface FontsourceApiResponse {
	id: string;
	family: string;
	subsets: string[];
	weights: number[];
	styles: string[];
	defSubset: string;
	variable: boolean;
	category: string;
	unicodeRange: Record<string, string>;
	variants: FontsourceApiVariants;
}

interface FontsourceApiError {
	status: number;
	error: string;
}

const FONT_CATEGORY_FALLBACK: Record<string, string> = {
	'sans-serif': 'sans-serif',
	serif: 'serif',
	monospace: 'monospace',
	handwriting: 'cursive',
	display: 'serif',
};

/** Extracts a Fontsource font id from a full URL (`https://fontsource.org/fonts/poppins`) or a bare id. */
export function parseFontsourceId(input: string): string {
	const trimmed = input.trim();
	if (/^https?:\/\//i.test(trimmed) || trimmed.includes('fontsource.org')) {
		const segments = trimmed.split('/').filter(Boolean);
		return (segments[segments.length - 1] ?? trimmed).toLowerCase();
	}
	return trimmed.toLowerCase();
}

/** Fetches font metadata from the Fontsource API and flattens it into a `CustomFont`. */
export async function fetchFontsourceFont(id: string): Promise<CustomFont> {
	let res: Response;
	try {
		res = await fetch(`https://api.fontsource.org/v1/fonts/${id}`);
	} catch {
		throw new Error('Could not reach Fontsource. Check your connection and try again.');
	}
	if (!res.ok) {
		const body: FontsourceApiError | null = await res.json().catch(() => null);
		throw new Error(body?.error ?? `Font "${id}" not found on Fontsource.`);
	}
	const data: FontsourceApiResponse = await res.json();

	const isVariableOnly = data.variable === true && data.weights.length <= 1;

	const variants: CustomFontVariant[] = [];
	if (!isVariableOnly) {
		for (const weight of data.weights) {
			for (const style of data.styles) {
				const woff2 = data.variants?.[String(weight)]?.[style]?.[data.defSubset]?.url?.woff2;
				if (woff2) variants.push({ weight: String(weight), style, woff2 });
			}
		}
	}

	return {
		id: data.id,
		family: data.family,
		category: data.category,
		variable: data.variable,
		isVariableOnly,
		defSubset: data.defSubset,
		unicodeRange: data.unicodeRange?.[data.defSubset] ?? '',
		styles: data.styles,
		variants,
	};
}

/** Composes the `font-family` CSS value for a resolved custom font, e.g. `'Poppins', sans-serif`. */
export function customFontOptionValue(font: CustomFont): string {
	const fallback = FONT_CATEGORY_FALLBACK[font.category] ?? 'sans-serif';
	return `'${font.family}', ${fallback}`;
}
