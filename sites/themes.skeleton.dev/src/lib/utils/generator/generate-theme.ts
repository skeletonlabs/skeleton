// Utility: Generate Theme
// Generates the {theme}.ts file output for users to copy into their projects.
import {
	settingsBackgrounds,
	settingsBrand,
	settingsColors,
	settingsCore,
	settingsCorners,
	settingsEdges,
	settingsSpacing,
	settingsTypography,
} from '$lib/state/generator.svelte';
import {
	formageEdges,
	formatBackgrounds,
	formatBrand,
	formatColors,
	formatCore,
	formatCorners,
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
${formatCorners(settingsCorners)}
${formatBackgrounds(settingsBackgrounds)}
${formatBrand(settingsBrand)}
${formatColors(settingsColors)}
}
`.trim();
	return themeCss;
}
