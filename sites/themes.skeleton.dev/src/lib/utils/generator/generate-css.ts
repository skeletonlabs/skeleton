// Utility: Generate CSS
// Generates the theme CSS for live previews.
import {
	settingsBackgrounds,
	settingsBrand,
	// settingsCore,
	settingsColors,
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
	formatCorners,
	formatSpacing,
	formatTypography,
} from '$lib/utils/generator/format-output';

export function generatePreviewCss() {
	const themeCss = `
${formatTypography(settingsTypography)}
${formatSpacing(settingsSpacing)}
${formageEdges(settingsEdges)}
${formatCorners(settingsCorners)}
${formatBackgrounds(settingsBackgrounds)}
${formatBrand(settingsBrand)}
${formatColors(settingsColors)}
`.trim();
	// See root +layout.svelte to reference where this attribute is used
	return `[data-theme="generated"] {\n${themeCss}\n}`;
}
