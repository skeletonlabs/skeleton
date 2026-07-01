// Import v5 Theme File
// Read a current-format (v5) theme file, updates local generator state.
import * as constants from '$lib/constants/generator';
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
import { genColorRamp } from '$lib/utils/generator/colors';
import chroma from 'chroma-js';

/** Parses a theme file into a flat `Record<key, value>` of CSS custom properties. */
export function parseThemeProperties(fileText: string) {
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
	// NOTE: match on the `--color-` prefix, not a loose substring — v5 typography keys like
	// `--typo-base--color-light` also contain "--color" but aren't part of the color ramp.
	Object.entries(properties).forEach((property) => {
		const [key, value] = property;
		if (!key.startsWith('--color-')) {
			return;
		}
		if (value.includes('var') || !chroma.valid(value)) {
			return;
		}
		properties[key] = chroma(value).hex();
	});

	return properties;
}

/** Applies a flat v5 property record onto the generator state. */
export function applyThemeProperties(properties: Record<string, string>) {
	for (const key in properties) {
		if (key in settingsColors) {
			// @ts-expect-error type not satisfied
			settingsColors[key] = properties[key];
		} else if (key in settingsBackgrounds) {
			// @ts-expect-error type not satisfied
			settingsBackgrounds[key] = properties[key];
		} else if (key in settingsBrand) {
			// @ts-expect-error type not satisfied
			settingsBrand[key] = properties[key];
		} else if (key in settingsTypography) {
			// @ts-expect-error type not satisfied
			settingsTypography[key] = properties[key];
		} else if (key in settingsSpacing) {
			// @ts-expect-error type not satisfied
			settingsSpacing[key] = properties[key];
		} else if (key in settingsEdges) {
			// @ts-expect-error type not satisfied
			settingsEdges[key] = properties[key];
		} else if (key in settingsCorners) {
			// @ts-expect-error type not satisfied
			settingsCorners[key] = properties[key];
		}
	}
}

export async function importThemeV5(fileText: string, fileName: string) {
	const properties = parseThemeProperties(fileText);

	// Set Generator State ---
	if (fileName) {
		settingsCore.name = fileName.split('.')[0];
	} // before .css
	applyThemeProperties(properties);

	/* Generate Contrast Colors */
	/* NOTE: this is a bit redundant, but should get us by for now */
	constants.colorNames.forEach((name) => genColorRamp(false, name));
}
