// Import Theme Template
// Updates state with preset theme values.

import chroma from 'chroma-js';
// Constants
import * as constants from '$lib/constants/generator';
// State
import {
	settingsCore,
	settingsColors,
	settingsBackgrounds,
	settingsSpacing,
	settingsEdges,
	settingsTypography
} from '$lib/state/generator.svelte';

// ---

function formatColors(properties: Record<string, string>) {
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

function formatBackgrounds(properties: Record<string, string>) {
	Object.keys(settingsBackgrounds).forEach((key) => {
		// @ts-expect-error type error
		settingsBackgrounds[key] = properties[key];
	});
}

function formatSpacing(properties: Record<string, string>) {
	Object.keys(settingsSpacing).forEach((key) => {
		// @ts-expect-error type error
		settingsSpacing[key] = properties[key];
	});
}

function formatEdges(properties: Record<string, string>) {
	Object.keys(settingsEdges).forEach((key) => {
		// @ts-expect-error type error
		settingsEdges[key] = parseInt(properties[key].replace('px', ''));
	});
}

function formatTypography(properties: Record<string, string>) {
	Object.keys(settingsTypography).forEach((key) => {
		// @ts-expect-error type error
		settingsTypography[key] = properties[key];
	});
}

// ---

export function importThemeProperties(name: string, properties: Record<string, string>) {
	settingsCore.name = name;
	formatColors(properties);
	formatBackgrounds(properties);
	formatSpacing(properties);
	formatEdges(properties);
	formatTypography(properties);
}
