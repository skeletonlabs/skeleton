// Import v3 Theme File
// Read v3 theme file contents, updates local generator state.
import * as constants from '$lib/constants/generator';
import {
	settingsBackgrounds,
	settingsColors,
	settingsCore,
	settingsEdges,
	settingsSpacing,
	settingsTypography,
} from '$lib/state/generator.svelte';
import { genColorRamp } from '$lib/utils/generator/colors';
import chroma from 'chroma-js';

export async function importThemeV3(fileText: string, fileName: string) {
	// Create array for each line
	// https://stackoverflow.com/a/5035058
	const lines = fileText.match(/[^\r\n]+/g)!;

	// Line Formatting ---
	let linesFormatted: string[];
	// Filter to only supported properties
	linesFormatted = lines.filter((line) => line.includes('--'));
	// Removing trailing comments
	linesFormatted = linesFormatted.map((line) => line.split('/*')[0]);
	// Format Lines
	linesFormatted = linesFormatted.map((line) => {
		line = line.trim();
		line = line.replaceAll(`;`, ''); // semi-colon
		return line;
	});

	// Create key/value object
	const properties: Record<string, string> = {};
	linesFormatted.forEach((line) => {
		const [key, value] = line.split(': ');
		properties[key] = value;
	});

	// Colors (oklch -> hex)
	Object.entries(properties).forEach((property) => {
		const [key, value] = property;
		if (!key.includes('--color')) {
			return;
		}
		if (value.includes('var')) {
			return;
		}
		properties[key] = chroma(value).hex();
	});

	// Set Generator State ---
	if (fileName) {
		settingsCore.name = fileName.split('.')[0];
	} // before .css
	// Theme Properties
	for (const key in properties) {
		if (key in settingsColors) {
			// @ts-expect-error type not satisfied
			settingsColors[key] = properties[key];
		} else if (key in settingsBackgrounds) {
			// @ts-expect-error type not satisfied
			settingsBackgrounds[key] = properties[key];
		} else if (key in settingsTypography) {
			// @ts-expect-error type not satisfied
			settingsTypography[key] = properties[key];
		} else if (key in settingsSpacing) {
			// @ts-expect-error type not satisfied
			settingsSpacing[key] = properties[key];
		} else if (key in settingsEdges) {
			// @ts-expect-error type not satisfied
			settingsEdges[key] = properties[key];
		}
	}

	/* Generate Contrast Colors */
	/* NOTE: this is a bit redundant, but should get us by for now */
	constants.colorNames.forEach((name) => genColorRamp(false, name));
}
