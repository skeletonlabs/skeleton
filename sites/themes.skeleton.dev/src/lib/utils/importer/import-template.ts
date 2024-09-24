// Import Theme Template
// Updates state with preset theme values.

import chroma from 'chroma-js';
// Constants
import * as constants from '$lib/constants/generator';
// State
import { settingsCore, settingsColors } from '$lib/state/generator.svelte';
// import type { SettingsCore } from '$lib/state/types';

// ---

function importColorState(properties: Record<string, string>) {
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

// ---

export function importThemeProperties(name: string, properties: Record<string, string>) {
	// Set Theme Name
	settingsCore.name = name;
	// Import Color State
	importColorState(properties);

	console.log({ settingsCore, settingsColors });
}
