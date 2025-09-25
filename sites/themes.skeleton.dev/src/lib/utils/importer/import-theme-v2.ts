// Import v2 Theme File
// Read v2 theme file contents, updates local generator state.
import * as constants from '$lib/constants/generator';
import { settingsColors, settingsCore } from '$lib/state/generator.svelte';
import { genColorRamp } from '$lib/utils/generator/colors';
import chroma from 'chroma-js';

export async function importThemeV2(fileText: string, fileName: string) {
	// Create array for each line
	// https://stackoverflow.com/a/5035058
	const lines = fileText.match(/[^\r\n]+/g)!;

	// Line Formatting ---
	let linesFormatted: string[];
	// Filter to only supported properties
	linesFormatted = lines.filter((line) => {
		if (line.includes('--color')) {
			return line;
		}
		// TODO: expand this...
		// if (line.includes('--theme-rounded')) return line;
	});
	// Removing trailing comments
	linesFormatted = linesFormatted.map((line) => line.split(' //')[0]);
	// Format Lines
	linesFormatted = linesFormatted.map((line) => {
		line = line.trim();
		line = line.replaceAll(`',`, ''); // final comma (single quote)
		line = line.replaceAll(`",`, ''); // final comma (double quote)
		line = line.replaceAll(`'`, ''); // open/close (single quotes)
		line = line.replaceAll(`"`, ''); // open/close (double quote)
		return line;
	});

	// Create key/value object
	const properties: Record<string, string> = {};
	linesFormatted.forEach((line) => {
		const [key, value] = line.split(': ');
		properties[key] = value;
	});

	// Generate Color Scale
	constants.colorNames.forEach((colorName) => {
		// Generate from 50/500/900
		const scale = chroma
			.scale([
				chroma(`rgb(${properties[`--color-${colorName}-50`].split(' ').join(',')})`),
				chroma(`rgb(${properties[`--color-${colorName}-500`].split(' ').join(',')})`),
				chroma(`rgb(${properties[`--color-${colorName}-900`].split(' ').join(',')})`),
			])
			.colors(11);
		// Update Properties
		scale.forEach((color, i) => {
			properties[`--color-${colorName}-${constants.colorShades[i]}`] = color; // hex
			// TODO: replace with oklch format in the future
			// // @ts-expect-error oklch param
			// properties[`--color-${colorName}-${constants.colorShades[i]}`] = chroma(color).css('oklch');
		});
	});

	// Set Generator State
	if (fileName) {
		settingsCore.name = fileName.split('.')[0];
	} // before .js|.ts
	// Colors
	for (const key of Object.keys(properties) as (keyof typeof settingsColors)[]) {
		if (key in settingsColors) {
			settingsColors[key] = properties[key]!;
		}
	}

	/* Generate Contrast Colors */
	/* NOTE: this is a bit redundant, but should get us by for now */
	constants.colorNames.forEach((name) => genColorRamp(false, name));
}
