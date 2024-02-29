import chroma from 'chroma-js';

// seed: '#0170f3',
function generateColorRamp(colorName: string, colorSettings: Record<string, string>) {
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

export function genColorPalette(storeFormColors: any) {
	let palette: any = {};
	Object.entries(storeFormColors).map(([colorName, colorSettings]: any) => {
		palette[colorName] = generateColorRamp(colorName, colorSettings);
	});
	return palette;
}
