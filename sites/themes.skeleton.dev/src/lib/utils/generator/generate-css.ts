// Utility: Generate CSS
// Generates the theme CSS for live previews.

import { formageEdges, formatBackgrounds, formatColors, formatSpacing, formatTypography } from '$lib/utils/generator/format-output';
import {
	// settingsCore,
	settingsColors,
	settingsBackgrounds,
	settingsTypography,
	settingsSpacing,
	settingsEdges
} from '$lib/state/generator.svelte';

export function generatePreviewCss() {
	const themeObject = {
		...formatTypography(settingsTypography),
		...formatSpacing(settingsSpacing),
		...formageEdges(settingsEdges),
		...formatBackgrounds(settingsBackgrounds),
		...formatColors(settingsColors)
	};
	let previewCss = '';
	for (const [key, value] of Object.entries(themeObject)) {
		previewCss += `\t${key}: ${value};\n`;
	}
	return `[data-theme-preview] {\n${previewCss}\n}`;
}
