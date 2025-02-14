import chroma from 'chroma-js';
// Constants
import * as constants from '$lib/constants/generator';
// State
import { settingsColors, settingsBackgrounds, settingsSpacing, settingsEdges, settingsTypography } from '$lib/state/generator.svelte';
// Utils
import { genColorContrast } from '$lib/utils/generator/colors';

// Production (v3) ---

export function formatColors(properties: Record<string, string>) {
	const paletteColorsArray: string[] = [];
	// Generate list of palette colors (all colors 50-950)
	constants.colorNames.forEach((colorName) => {
		return constants.colorShades.forEach((colorShade) => {
			paletteColorsArray.push(`--color-${colorName}-${colorShade}`);
		});
	});
	Object.keys(settingsColors).forEach((key) => {
		// Skip if value is undefined
		if (!properties[key]) return;
		// If palette color, format RGB -> Hex, otherwise use verbatim
		settingsColors[key] = paletteColorsArray.includes(key) ? chroma(`rgb(${properties[key].split(' ')})`).hex() : properties[key];
	});
}

export function formatBackgrounds(properties: Record<string, string>) {
	Object.keys(settingsBackgrounds).forEach((key) => {
		// @ts-expect-error type error
		settingsBackgrounds[key] = properties[key];
	});
}

export function formatSpacing(properties: Record<string, string>) {
	Object.keys(settingsSpacing).forEach((key) => {
		// @ts-expect-error type error
		settingsSpacing[key] = properties[key];
	});
}

export function formatEdges(properties: Record<string, string>) {
	Object.keys(settingsEdges).forEach((key) => {
		// @ts-expect-error type error
		settingsEdges[key] = parseInt(properties[key].replace('px', ''));
	});
}

export function formatTypography(properties: Record<string, string>) {
	Object.keys(settingsTypography).forEach((key) => {
		// @ts-expect-error type error
		settingsTypography[key] = properties[key];
	});
}

// Legacy (v2) ---

export function formatColorsLegacy(properties: Record<string, string>) {
	// Run Standard Formatting
	formatColors(properties);
	// Generate Color Contrast
	constants.colorNames.forEach((colorName) => {
		return constants.colorShades.forEach((colorShade) => {
			genColorContrast(colorName, String(colorShade), `--color-${colorName}-${colorShade}`);
		});
	});
}

export function formatEdgesLegacy(properties: Record<string, string>) {
	// v3 Key : v2 Key
	const edgeMapping = {
		'--radii-default': '--theme-rounded-base',
		'--radius-container': '--theme-rounded-container',
		'--default-border-width': '--theme-border-base',
		'--default-divide-width': '--theme-border-base',
		'--default-ring-width': '--theme-border-base'
	};
	// Loop and set state
	for (const edgeKey in edgeMapping) {
		// @ts-expect-error type error
		settingsEdges[edgeKey] = parseInt(properties[edgeMapping[edgeKey]].replace('px', ''));
	}
}
