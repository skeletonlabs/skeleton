// Utility: Generate Theme
// Generates the {theme}.ts file output for users to copy into their projects.

import type { SettingsBackgrounds, SettingsTypography, SettingsSpacing, SettingsEdges } from '$lib/state/types';
import {
	settingsCore,
	settingsColors,
	settingsBackgrounds,
	settingsTypography,
	settingsSpacing,
	settingsEdges
} from '$lib/state/state.svelte';

function formatTypography(typography: SettingsTypography) {
	return typography;
}

function formatSpacing(spacing: SettingsSpacing) {
	return spacing;
}

function formageEdges(edges: SettingsEdges) {
	return edges;
}

function formatBackgrounds(backgrounds: SettingsBackgrounds) {
	return backgrounds;
}

function formatColors(colors: Record<string, string>) {
	return colors;
}

export function generateTheme() {
	const themeObject = {
		name: settingsCore.name,
		properties: {
			...formatTypography(settingsTypography),
			...formatSpacing(settingsSpacing),
			...formageEdges(settingsEdges),
			...formatBackgrounds(settingsBackgrounds),
			...formatColors(settingsColors)
		}
	};
	return `
import type { Theme } from '@skeletonlabs/skeleton/themes';\n
const ${settingsCore.name} = ${JSON.stringify(themeObject, null, 2)} satisfies Theme;\n
export default ${settingsCore.name};
`.trim();
}
