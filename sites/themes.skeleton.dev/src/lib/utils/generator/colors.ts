// Color Utilities
import * as constants from '$lib/constants/generator';
import { settingsColors } from '$lib/state/generator.svelte';
import chroma from 'chroma-js';

// Common ---

/* Takes color shade 50/500/950 and generates a color scale */
function genColorScale(colorHigh: string, colorMed: string, colorLow: string) {
	return chroma
		.scale([
			chroma.valid(colorHigh) ? chroma(colorHigh) : '#FFFFFF',
			chroma.valid(colorMed) ? chroma(colorMed) : '#CCCCCC',
			chroma.valid(colorLow) ? chroma(colorLow) : '#000000',
		])
		.colors(11);
}

export function getColorKey(var1: string, var2: string): keyof typeof settingsColors {
	return `--color-${var1}-${var2}` as keyof typeof settingsColors;
}

export function genColorContrast(colorName: string, shade: string, targetShade: string) {
	const paletteShade = settingsColors[targetShade as keyof typeof settingsColors];
	let contrastLight = settingsColors[getColorKey(colorName, 'contrast-light')];
	let contrastDark = settingsColors[getColorKey(colorName, 'contrast-dark')];

	// Strip wrapping `var()`
	if (contrastLight.includes('var')) {
		contrastLight = contrastLight.replace('var(', '').replace(')', '');
	}
	if (contrastDark.includes('var')) {
		contrastDark = contrastDark.replace('var(', '').replace(')', '');
	}

	// Get Raw Hex
	if (!contrastLight.includes('inherit')) {
		// If CSS Custom Property
		if (contrastLight.includes('255 255 255')) {
			contrastLight = '#FFFFFF';
		}
		if (contrastDark.includes('0 0 0')) {
			contrastDark = '#000000';
		}
		// If White or Black
		if (contrastLight.includes('--')) {
			contrastLight = settingsColors[contrastLight as keyof typeof settingsColors];
		}
		if (contrastDark.includes('--')) {
			contrastDark = settingsColors[contrastDark as keyof typeof settingsColors];
		}
	}

	// Compare
	const contrastRatioLight = chroma.contrast(chroma(paletteShade), contrastLight);
	const contrastRatioDark = chroma.contrast(chroma(paletteShade), contrastDark);

	// Set State
	if (contrastRatioLight > contrastRatioDark) {
		settingsColors[getColorKey(colorName, `contrast-${shade}`)] = `var(--color-${colorName}-contrast-light)`;
	} else {
		settingsColors[getColorKey(colorName, `contrast-${shade}`)] = `var(--color-${colorName}-contrast-dark)`;
	}
}

/* Applies the color scale to the color state */
function applyColorState(colorName: string, colorScale: string[]) {
	constants.colorShades.forEach((shade: number, i: number) => {
		const targetShade = getColorKey(colorName, shade.toString());
		// Set state
		settingsColors[targetShade] = colorScale[i];
		// Generate Color Contrast
		genColorContrast(colorName, String(shade), targetShade);
	});
}

// Exported ---

/* Blend between 50/500/950 colors automatically */
export function genColorRamp(disabled: boolean, colorName: string) {
	if (disabled) {
		return;
	}
	const shade50 = settingsColors[getColorKey(colorName, '50')];
	const shade500 = settingsColors[getColorKey(colorName, '500')];
	const shade950 = settingsColors[getColorKey(colorName, '950')];
	// Generate Color Scale
	const colorScale = genColorScale(shade50, shade500, shade950);
	// Update Color State
	applyColorState(colorName, colorScale);
}

/** Provide a seed color, generates a full palette ramp */
export function seedColor(colorName: string, seedColor: string) {
	if (!chroma.valid(seedColor)) {
		alert('Invalid color value provided.');
		return;
	}
	// Generate high/med/low colors
	const colorArray = [
		chroma(seedColor).brighten(2.5).hex(), // high
		chroma(seedColor).hex(), // med
		chroma(seedColor).darken(2.5).hex(), // low
	];
	// Generate Color Scale
	const colorScale = genColorScale(colorArray[0], colorArray[1], colorArray[2]);
	// Update Color State
	applyColorState(colorName, colorScale);
}

export function genRandomSeed(colorName: string) {
	const lightness = Math.random() * 0.6 + 0.2; // Random between 0.2 to 0.8
	const chromaColor = chroma.random().set('hsl.l', lightness);
	seedColor(colorName, chromaColor.hex());
}
