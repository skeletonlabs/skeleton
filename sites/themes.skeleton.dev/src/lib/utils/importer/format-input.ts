import chroma from 'chroma-js';
// Constants
import * as constants from '$lib/constants/generator';
// State
import { settingsColors, settingsBackgrounds, settingsSpacing, settingsEdges, settingsTypography } from '$lib/state/generator.svelte';

// Production (v3) ---

export function formatColors(properties: Record<string, string>) {
	const coreColorArr: string[] = [];
	// Generate list of core colors
	constants.colorNames.forEach((colorName) => {
		return constants.colorShades.forEach((colorShade) => {
			coreColorArr.push(`--color-${colorName}-${colorShade}`);
		});
	});
	// Update State
	Object.keys(settingsColors).forEach((key) => {
		// If core color, format RGB -> Hex, otherwise use verbatim
		settingsColors[key] = coreColorArr.includes(key) ? chroma(`rgb(${properties[key].split(' ')})`).hex() : properties[key];
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

export function formatEdgesLegacy(properties: Record<string, string>) {
	// v3 Key : v2 Key
	const edgeMapping = {
		'--radii-default': '--theme-rounded-base',
		'--radii-container': '--theme-rounded-container',
		'--border-width-default': '--theme-border-base',
		'--divide-width-default': '--theme-border-base',
		'--outline-width-default': '--theme-border-base',
		'--ring-width-default': '--theme-border-base'
	};
	// Loop and set state
	for (const edgeKey in edgeMapping) {
		// @ts-expect-error type error
		settingsEdges[edgeKey] = parseInt(properties[edgeMapping[edgeKey]].replace('px', ''));
	}
}
