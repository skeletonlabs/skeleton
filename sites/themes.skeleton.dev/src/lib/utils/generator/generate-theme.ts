// Utility: Generate Theme
// Generates the {theme}.ts file output for users to copy into their projects.
import {
	settingsBackgrounds,
	settingsColors,
	settingsCore,
	settingsEdges,
	settingsSpacing,
	settingsTypography,
} from '$lib/state/generator.svelte';
import {
	formageEdges,
	formatBackgrounds,
	formatColors,
	formatCore,
	formatSpacing,
	formatTypography,
} from '$lib/utils/generator/format-output';

export function generateTheme() {
	const _settingsCore = formatCore(settingsCore);
	const themeCss = `
[data-theme='${_settingsCore.name}'] {
${formatTypography(settingsTypography)}
${formatSpacing(settingsSpacing)}
${formageEdges(settingsEdges)}
${formatBackgrounds(settingsBackgrounds)}
${formatColors(settingsColors)}
}
`.trim();
	return themeCss;
}
