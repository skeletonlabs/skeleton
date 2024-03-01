import chroma from 'chroma-js';

// Uses Chroma.js to generate a color ramp
function generateColorRamp(colorSettings: Record<string, string>) {
	return {
		50: chroma(colorSettings.seed).brighten(3).rgb(),
		100: chroma(colorSettings.seed).brighten(2).rgb(),
		200: chroma(colorSettings.seed).brighten(1).rgb(),
		300: chroma(colorSettings.seed).brighten(0.5).rgb(),
		400: chroma(colorSettings.seed).brighten(0.25).rgb(),
		500: chroma(colorSettings.seed).rgb(), // *
		600: chroma(colorSettings.seed).darken(0.25).rgb(),
		700: chroma(colorSettings.seed).darken(0.5).rgb(),
		800: chroma(colorSettings.seed).darken(1).rgb(),
		900: chroma(colorSettings.seed).darken(1.5).rgb(),
		950: chroma(colorSettings.seed).darken(2.25).rgb()
	};
}

// Loops the object of colors to generate a ramp per color
export function genColorPalette(stateFormColors: any) {
	let palette: any = {};
	Object.entries(stateFormColors).map(([colorName, colorSettings]: any) => {
		palette[colorName] = generateColorRamp(colorSettings);
	});
	return palette;
}
