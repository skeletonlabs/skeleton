// Import Theme File
// Read upload theme file, updates local generator state.

import chroma from 'chroma-js';
import { settingsCore } from '$lib/state/generator.svelte';
import { formatColors, formatColorsLegacy, formatEdgesLegacy } from './format-input';
import * as constants from '$lib/constants/generator';

export async function importThemeFile(file: File) {
	const fileText = await file.text();

	// Determine if v2 Legacy Mode
	const enableLegacyMode = fileText.includes('--on-primary');

	// Create array for each line
	// https://stackoverflow.com/a/5035058
	const lines = fileText.match(/[^\r\n]+/g)!;

	// Filter only CSS custom property lines
	const linesFiltered = lines.filter((line) => line.includes('--'));

	// Format each line
	const lineMapped = linesFiltered.map((line) => {
		// prettier-ignore
		return (line = line
			.trim() // trim whitespace
			.replaceAll('\t', '') // tabbing
			.replaceAll(`',`, '') // final comma (single quote)
			.replaceAll(`",`, '') // final comma (double quote)
			.replaceAll(`'`, '') // open/close (single quotes)
			.replaceAll(`"`, '') // open/close (double quote)
		);
	});

	// Create key/value object
	const properties: Record<string, string> = {};
	lineMapped.forEach((line) => {
		const [key, value] = line.split(': ');
		properties[key] = value;
	});

	// If v2 Mode, generate 950 shades automatically
	if (enableLegacyMode) {
		constants.colorNames.forEach((colorName) => {
			properties[`--color-${colorName}-950`] = chroma(`rgb(${properties[`--color-${colorName}-900`].split(' ')})`)
				.darken(0.2)
				.rgb()
				.join(' ');
		});
	}

	// Format and update state
	settingsCore.name = file.name.replace('.ts', '').replace('.js', '');
	enableLegacyMode ? formatColorsLegacy(properties) : formatColors(properties);
	if (enableLegacyMode) formatEdgesLegacy(properties);
}
