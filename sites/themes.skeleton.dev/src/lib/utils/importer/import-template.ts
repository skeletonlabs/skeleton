// Import Theme Template
// Updates state with preset theme values.

import chroma from 'chroma-js';
// Constants
import * as constants from '$lib/constants/generator';
// State
import { settingsCore, settingsColors } from '$lib/state/generator.svelte';
// import type { SettingsCore } from '$lib/state/types';

const coreColorArr: string[] = [];

// Generate list of core colors
constants.colorNames.forEach((colorName) => {
	return constants.colorShades.forEach((colorShade) => {
		coreColorArr.push(`--color-${colorName}-${colorShade}`);
	});
});

// ---

function importColorState(properties: Record<string, string>) {
	Object.keys(settingsColors).forEach((key) => {
		// If core color, format RGB -> Hex
		if (coreColorArr.includes(properties[key])) settingsColors[key] = chroma(properties[key]).hex();
		// Else use verbatim value
		settingsColors[key] = properties[key];
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
