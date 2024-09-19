// Utility: Generate Theme
// Generates the {theme}.ts file output for users to copy into their projects.

import { settingsCore, settingsColors, settingsTypography, settingsSpacing, settingsEdges } from '$lib/state/state.svelte';
import type { SettingsCore, SettingsTypography, SettingsSpacing, SettingsEdges } from '$lib/state//types';

function formatCore(core: SettingsCore) {
	return core;
}

function formatTypography(typography: SettingsTypography) {
	return typography;
}

function formatSpacing(spacing: SettingsSpacing) {
	return spacing;
}

function formageEdges(edges: SettingsEdges) {
	return edges;
}

function formatColors(colors: Record<string, string>) {
	return colors;
}

export function generateTheme() {
	const themeObject = {
		name: settingsCore.name,
		properties: {
			...formatCore(settingsCore),
			...formatTypography(settingsTypography),
			...formatSpacing(settingsSpacing),
			...formageEdges(settingsEdges),
			...formatColors(settingsColors)
		}
	};
	return `
import type { Theme } from '@skeletonlabs/skeleton/themes';\n
const ${settingsCore.name} = ${JSON.stringify(themeObject, null, 2)} satisfies Theme;\n
export default ${settingsCore.name};
`.trim();
}
