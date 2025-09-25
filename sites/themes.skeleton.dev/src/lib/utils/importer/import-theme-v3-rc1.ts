// Import v3 RC1 Theme File
// Read v3 RC1 theme file contents, updates local generator state.
import {
	settingsBackgrounds,
	settingsColors,
	settingsCore,
	settingsEdges,
	settingsSpacing,
	settingsTypography,
} from '$lib/state/generator.svelte';
import chroma from 'chroma-js';

export async function importThemeV3Rc1(fileText: string, fileName: string) {
	// Create array for each line
	// https://stackoverflow.com/a/5035058
	const lines = fileText.match(/[^\r\n]+/g)!;

	// Line Formatting ---
	let linesFormatted: string[];
	// Filter to only supported properties
	linesFormatted = lines.filter((line) => line.includes('--'));
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

	// Modify Property Key/Values ---
	// Set Value
	properties['--spacing'] = '0.25rem';
	properties['--text-scaling'] = '1.067';
	properties['--base-font-family'] = 'inherit';
	properties['--heading-font-family'] = 'inherit';
	properties['--anchor-font-family'] = 'inherit';
	properties['--radius-base'] = '0.375rem';
	properties['--radius-container'] = '0.75rem';
	properties['--default-border-width'] = '1px';
	properties['--default-divide-width'] = '1px';
	properties['--default-ring-width'] = '1px';
	// Delete
	delete properties['--type-scale-1'];
	delete properties['--type-scale-2'];
	delete properties['--type-scale-3'];
	delete properties['--type-scale-4'];
	delete properties['--type-scale-5'];
	delete properties['--type-scale-6'];
	delete properties['--type-scale-7'];
	delete properties['--type-scale-8'];
	delete properties['--type-scale-9'];
	delete properties['--type-scale-10'];
	delete properties['--type-scale-11'];
	delete properties['--type-scale-12'];
	delete properties['--type-scale-13'];
	// ---
	delete properties['--space-scale-factor'];
	delete properties['--type-scale-factor'];
	delete properties['--radii-default'];
	delete properties['--radii-container'];
	delete properties['--border-width-default'];
	delete properties['--divide-width-default'];
	delete properties['--ring-width-default'];
	delete properties['--outline-width-default'];

	// Colors (rgb -> oklch)
	for (const key in properties) {
		if (key.includes('--color') && !properties[key].includes('var(')) {
			properties[key] = chroma(`rgb(${properties[key].replaceAll(' ', ', ')})`).hex();
		}
	}

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
}
