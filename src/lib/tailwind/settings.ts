// Common Shared Settings and Constants

interface ColorPairing {
	light: number;
	dark: number;
}

export default {
	colorNames: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'] as const,
	colorShades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const,
	colorPairings: [
		// forward:
		{ light: 50, dark: 900 },
		{ light: 100, dark: 800 },
		{ light: 200, dark: 700 },
		{ light: 300, dark: 600 },
		{ light: 400, dark: 500 },
		// backwards
		{ light: 900, dark: 50 },
		{ light: 800, dark: 100 },
		{ light: 700, dark: 200 },
		{ light: 600, dark: 300 },
		{ light: 500, dark: 400 }
	] as ColorPairing[],
};
