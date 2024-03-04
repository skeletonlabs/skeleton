import chroma from 'chroma-js';

// Generates a color ramp with default settings
function genColorRamp(colorSettings: Record<string, string[]>) {
	// Validate and create color scale
	// prettier-ignore
	const colorScale = chroma.scale([
		chroma.valid(colorSettings.seeds[0]) ? chroma(colorSettings.seeds[0]) : '#CCCCCC',
		chroma.valid(colorSettings.seeds[1]) ? chroma(colorSettings.seeds[1]) : '#CCCCCC',
		chroma.valid(colorSettings.seeds[2]) ? chroma(colorSettings.seeds[2]) : '#CCCCCC',
	]).colors(11);
	// Return the values as RGB
	return {
		50: chroma(colorScale[0]).rgb(),
		100: chroma(colorScale[1]).rgb(),
		200: chroma(colorScale[2]).rgb(),
		300: chroma(colorScale[3]).rgb(),
		400: chroma(colorScale[4]).rgb(),
		500: chroma(colorScale[5]).rgb(),
		600: chroma(colorScale[6]).rgb(),
		700: chroma(colorScale[7]).rgb(),
		800: chroma(colorScale[8]).rgb(),
		900: chroma(colorScale[9]).rgb(),
		950: chroma(colorScale[10]).rgb()
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
