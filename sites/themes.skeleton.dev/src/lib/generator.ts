import chroma from 'chroma-js';

// Generates a color ramp with default settings
function genColorRamp(colorSettings: Record<string, string>) {
	// Validate the color
	const validatedSeed = chroma.valid(colorSettings.seed) ? colorSettings.seed : '#CCCCCC';
	// Create the color scale
	const colorScale = chroma.scale(['white', validatedSeed, 'black']).colors(13);
	// Return the values as RGB
	return {
		50: chroma(colorScale[1]).rgb(),
		100: chroma(colorScale[2]).rgb(),
		200: chroma(colorScale[3]).rgb(),
		300: chroma(colorScale[4]).rgb(),
		400: chroma(colorScale[5]).rgb(),
		500: chroma(colorScale[6]).rgb(),
		600: chroma(colorScale[7]).rgb(),
		700: chroma(colorScale[8]).rgb(),
		800: chroma(colorScale[9]).rgb(),
		900: chroma(colorScale[10]).rgb(),
		950: chroma(colorScale[11]).rgb()
	};
}

// Loops the object of colors to generate a ramp per color
export function genColorPalette(stateFormColors: any) {
	let palette: any = {};
	Object.entries(stateFormColors).map(([colorName, colorSettings]: any) => {
		palette[colorName] = genColorRamp(colorSettings);
	});
	return palette;
}
