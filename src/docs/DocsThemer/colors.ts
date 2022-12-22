// This script is based 'tailwindcolorshades' by Javis V. Pérez:
// https://github.com/javisperez/tailwindcolorshades/blob/master/src/composables/colors.ts

export type Palette = {
	[key: number]: {
		/** The hex color. */
		hex: string;
		/** The RGB color. */
		rgb: string;
		/** The overlapping text/fill color. */
		on: string;
	};
};

type Rgb = {
	r: number;
	g: number;
	b: number;
};

function hexToRgb(hex: string): Rgb | null {
	const sanitizedHex = hex.replaceAll('##', '#');
	const colorParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(sanitizedHex);

	if (!colorParts) return null;

	const [, r, g, b] = colorParts;

	return {
		r: parseInt(r, 16),
		g: parseInt(g, 16),
		b: parseInt(b, 16)
	} as Rgb;
}

export function hextoTailwindRgbString(hex: string): string {
	const sanitizedHex = hex.replaceAll('##', '#');
	const colorParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(sanitizedHex);

	if (!colorParts) return '(invalid)';

	const [, r, g, b] = colorParts;

	return `${parseInt(r, 16)} ${parseInt(g, 16)} ${parseInt(b, 16)}`;
}

function rgbToHex(r: number, g: number, b: number): string {
	const toHex = (c: number) => `0${c.toString(16)}`.slice(-2);
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function generateA11yOnColor(hex: string): '255 255 255' | '0 0 0' {
	const rgbColor = hexToRgb(hex);

	if (!rgbColor) {
		return '0 0 0';
	}

	const { r, g, b } = rgbColor;
	const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	return luma < 120 ? '255 255 255' : '0 0 0'; // white | black
}

function lighten(hex: string, intensity: number): string {
	const color = hexToRgb(`#${hex}`);

	if (!color) return '';

	const r = Math.round(color.r + (255 - color.r) * intensity);
	const g = Math.round(color.g + (255 - color.g) * intensity);
	const b = Math.round(color.b + (255 - color.b) * intensity);

	return rgbToHex(r, g, b);
}

function darken(hex: string, intensity: number): string {
	const color = hexToRgb(hex);

	if (!color) return '';

	const r = Math.round(color.r * intensity);
	const g = Math.round(color.g * intensity);
	const b = Math.round(color.b * intensity);

	return rgbToHex(r, g, b);
}

export function generatePalette(baseColor: string): Palette {
	const hexValidation = new RegExp(/^#[0-9a-f]{6}$/i);
	if (!hexValidation.test(baseColor)) baseColor = '#CCCCCC';

	const hex500 = `#${baseColor}`.replace('##', '#');

	const response: Palette = {
		500: { hex: hex500, rgb: hextoTailwindRgbString(hex500), on: generateA11yOnColor(hex500) }
	};

	const intensityMap: { [key: number]: number } = {
		50: 0.85,
		100: 0.8,
		200: 0.75,
		300: 0.6,
		400: 0.3,
		600: 0.9,
		700: 0.75,
		800: 0.6,
		900: 0.49
	};

	[50, 100, 200, 300, 400].forEach((level) => {
		const hex = lighten(baseColor, intensityMap[level]);
		response[level] = { hex, rgb: hextoTailwindRgbString(hex), on: generateA11yOnColor(hex) };
	});

	[600, 700, 800, 900].forEach((level) => {
		const hex = darken(baseColor, intensityMap[level]);
		response[level] = { hex, rgb: hextoTailwindRgbString(hex), on: generateA11yOnColor(hex) };
	});

	return response as Palette;
}
