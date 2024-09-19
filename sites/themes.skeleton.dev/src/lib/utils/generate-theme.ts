// Utility: Generate Theme
// Generates the {theme}.ts file output for users to copy into their projects.

import { formageEdges, formatBackgrounds, formatColors, formatSpacing, formatTypography } from './format-output';
import {
	settingsCore,
	settingsColors,
	settingsBackgrounds,
	settingsTypography,
	settingsSpacing,
	settingsEdges
} from '$lib/state/state.svelte';

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
