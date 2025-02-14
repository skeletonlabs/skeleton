// Utility: Generate Theme
// Generates the {theme}.ts file output for users to copy into their projects.

import {
	formatCore,
	formageEdges,
	formatBackgrounds,
	formatColors,
	formatSpacing,
	formatTypography
} from '$lib/utils/generator/format-output';
import {
	settingsCore,
	settingsColors,
	settingsBackgrounds,
	settingsTypography,
	settingsSpacing,
	settingsEdges
} from '$lib/state/generator.svelte';

// export function generateTheme() {
// 	const _settingsCore = formatCore(settingsCore);
// 	const themeObject = {
// 		name: _settingsCore.name,
// 		properties: {
// 			...formatTypography(settingsTypography),
// 			...formatSpacing(settingsSpacing),
// 			...formageEdges(settingsEdges),
// 			...formatBackgrounds(settingsBackgrounds),
// 			...formatColors(settingsColors)
// 		},
// 		metadata: { version: '3.0.0' }
// 	};
// 	return `
// import type { Theme } from '@skeletonlabs/skeleton/themes';\n
// const ${_settingsCore.name} = ${JSON.stringify(themeObject, null, 2)} satisfies Theme;\n
// export default ${_settingsCore.name};
// `.trim();
// }

export function generateTheme() {
	const _settingsCore = formatCore(settingsCore);
	const properties = `
${formatTypography(settingsTypography)}
${formatSpacing(settingsSpacing)}
${formageEdges(settingsEdges)}
${formatBackgrounds(settingsBackgrounds)}
${formatColors(settingsColors)}
	`.trim();
	return `
[data-theme='${_settingsCore.name}'] {
	${properties}
}
`.trim();
}
