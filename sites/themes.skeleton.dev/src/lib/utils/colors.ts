// Color Utilities

import chroma from 'chroma-js';
import * as constants from '$lib/constants/constants';
import { settingsColors } from '$lib/state/state.svelte';

// Common ---

/* Takes color shade 50/500/960 and generates a color scale */
function genColorScale(colorHigh: string, colorMed: string, colorLow: string) {
	const shadeFallback = '#CCCCCC';
	return chroma
		.scale([
			chroma.valid(colorHigh) ? chroma(colorHigh) : shadeFallback,
			chroma.valid(colorMed) ? chroma(colorMed) : shadeFallback,
			chroma.valid(colorLow) ? chroma(colorLow) : shadeFallback
		])
		.colors(11);
}

/* Applies the color scale to the color state */
function applyColorState(colorName: string, colorScale: string[]) {
	constants.colorShades.forEach((shade, i) => {
		const targetShade = `--color-${colorName}-${shade}`;
		settingsColors[targetShade] = colorScale[i];
		console.log(settingsColors[targetShade]);
	});
}

// Exported ---

/* Blend between 50/500/950 colors automatically */
export function genColorRamp(disabled: boolean, colorName: string) {
	if (disabled) return;
	const shade50 = settingsColors[`--color-${colorName}-50`];
	const shade500 = settingsColors[`--color-${colorName}-500`];
	const shade950 = settingsColors[`--color-${colorName}-950`];
	// Generate Color Scale
	const colorScale = genColorScale(shade50, shade500, shade950);
	// Update Color State
	applyColorState(colorName, colorScale);
}

/** Provide a seed color, generates a full palette ramp */
export function seedColor(colorName: string, seedColor: string) {
	if (!chroma.valid(seedColor)) return;
	// Generate high/med/low colors
	const colorArray = [
		chroma(seedColor).brighten(2.5).hex(), // high
		chroma(seedColor).hex(), // med
		chroma(seedColor).darken(2.5).hex() // low
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
