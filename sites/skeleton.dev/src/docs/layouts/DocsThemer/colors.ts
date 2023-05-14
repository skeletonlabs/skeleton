// This script is based 'tailwindcolorshades' by Javis V. Pérez:
// https://github.com/javisperez/tailwindcolorshades/blob/master/src/composables/colors.ts
import type { PassReport } from './types';

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

export function hexToRgb(hex: string): Rgb | null {
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

export function hexToTailwindRgbString(hex: string): string {
	const sanitizedHex = hex.replaceAll('##', '#');
	const colorParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(sanitizedHex);

	if (!colorParts) return '(invalid)';

	const [, r, g, b] = colorParts;

	return `${parseInt(r, 16)} ${parseInt(g, 16)} ${parseInt(b, 16)}`;
}

export function rgbToHex(r: number, g: number, b: number): string {
	const toHex = (c: number) => `0${c.toString(16)}`.slice(-2);
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function generateA11yOnColor(hex: string): '255 255 255' | '0 0 0' {
	const black = calculateRatio(hex, '#000000');
	const white = calculateRatio(hex, '#FFFFFF');
	return black < white ? '0 0 0' : '255 255 255';
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
		500: { hex: hex500, rgb: hexToTailwindRgbString(hex500), on: generateA11yOnColor(hex500) }
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
		response[level] = { hex, rgb: hexToTailwindRgbString(hex), on: generateA11yOnColor(hex) };
	});

	[600, 700, 800, 900].forEach((level) => {
		const hex = darken(baseColor, intensityMap[level]);
		response[level] = { hex, rgb: hexToTailwindRgbString(hex), on: generateA11yOnColor(hex) };
	});

	return response as Palette;
}

type ContrastLevel = 'AA' | 'AAA';
type ContrastSize = 'small' | 'large';

export const contrastLevels: Record<
	ContrastSize,
	{
		[key in ContrastLevel]: number;
	}
> = {
	/** For text that is less than 18pt */
	small: {
		AA: 1 / 4.5,
		AAA: 1 / 7
	},
	/** For text that is at or is larger than 18pt */
	large: {
		AA: 1 / 3,
		AAA: 1 / 4.5
	}
};

/** Takes the RGB and returns the luminance of it */
export function getLuminance(r: Rgb): number;
export function getLuminance(r: number, g: number, b: number): number;
export function getLuminance(r: number | Rgb, g?: number, b?: number) {
	const { _r, _g, _b } = typeof r === 'object' ? { _r: r.r, _g: r.g, _b: r.b } : { _r: r, _g: g, _b: b }; // I'm not really happy with this ternary, but it works
	// we can't use !_r shorthand here because 0 is a valid value
	if (_r === undefined || _g === undefined || _b === undefined) throw new Error('Invalid RGB value!');
	const a = [_r, _g, _b].map(function (v) {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function destringRgb(rgbString: string): Rgb {
	const rgb = rgbString.match(/(\d+),?\s*(\d+),?\s*(\d+)/); // matches "255, 255, 255" and "255 255 255"
	if (!rgb) throw new Error('Invalid RGB string!');
	return { r: parseInt(rgb[1], 10), g: parseInt(rgb[2], 10), b: parseInt(rgb[3], 10) };
}

// overload to specify that when there is no returnType, it will always return Rgb
export function handleStringColor(colorString: string): Rgb;
export function handleStringColor(colorString: string, returnType: 'rgb'): Rgb;
export function handleStringColor(colorString: string, returnType: 'hex'): string;
export function handleStringColor(colorString: string, returnType?: 'hex' | 'rgb'): string | Rgb;
export function handleStringColor(colorString: string, returnType: 'hex' | 'rgb' = 'rgb'): string | Rgb {
	// if it's a css variable
	if (colorString.includes('--')) {
		colorString = colorString.replace(/var\(|\)/g, ''); // grab just the variable name
		const cssVarHydrated = getComputedStyle(document.documentElement).getPropertyValue(colorString).trim();
		return handleStringColor(cssVarHydrated, returnType);
	}
	// if it has spaces, it's an rgb string
	if (colorString.includes(' ')) {
		const rgb = destringRgb(colorString);
		return returnType === 'hex' ? rgbToHex(rgb.r, rgb.g, rgb.b) : rgb;
	}

	// if it's a hex string
	if (colorString.includes('#')) {
		const rgb = hexToRgb(colorString);
		if (!rgb) return '(invalid)';
		return returnType === 'hex' ? colorString : rgb;
	}
	return colorString;
}

export function calculateRatio(luminance1: string | number, luminance2: string | number) {
	const lum1 = typeof luminance1 === 'string' ? getLuminance(handleStringColor(luminance1)) : luminance1;
	const lum2 = typeof luminance2 === 'string' ? getLuminance(handleStringColor(luminance2)) : luminance2;
	if (lum1 === undefined || lum2 === undefined) throw new Error('Luminance is undefined!');
	return lum1 > lum2 ? (lum2 + 0.05) / (lum1 + 0.05) : (lum1 + 0.05) / (lum2 + 0.05);
}

export function textPasses(textColor: string, backgroundColor: string, size: ContrastSize, level: ContrastLevel) {
	const ratio = calculateRatio(textColor, backgroundColor);
	return ratio <= contrastLevels[size][level];
}

export function hexValueIsValid(textColor: string) {
	return /^#[0-9A-F]{6}$/i.test(textColor);
}

/** A catch-all function to give a report on what size and level a given combination achieves.  */
export function getPassReport(textColor: string, backgroundColor: string): PassReport {
	const _textColor = handleStringColor(textColor, 'hex');
	const _backgroundColor = handleStringColor(backgroundColor, 'hex');
	const contrast = calculateRatio(_textColor, _backgroundColor);
	const smallAA = textPasses(_textColor, _backgroundColor, 'small', 'AA');
	const smallAAA = textPasses(_textColor, _backgroundColor, 'small', 'AAA');
	const largeAA = textPasses(_textColor, _backgroundColor, 'large', 'AA');
	const largeAAA = textPasses(_textColor, _backgroundColor, 'large', 'AAA');
	const fails = !smallAA && !smallAAA && !largeAA && !largeAAA;
	const AAAEmoji = '<i class="fa-solid fa-heart h-3"></i>';
	const AAEmoji = '<i class="fa-solid fa-star h-3"></i>';
	const largeAAEmoji = '<i class="fa-solid fa-star-half-stroke h-3"></i>';
	const failEmoji = '<i class="fa-solid fa-triangle-exclamation h-3"></i>';
	const report = {
		emoji: smallAAA ? AAAEmoji : smallAA ? AAEmoji : largeAA ? largeAAEmoji : failEmoji,
		note:
			`${_textColor} and ${_backgroundColor} ` +
			(smallAAA
				? 'has great contrast!'
				: smallAA
				? 'is satisfactory for larger text'
				: largeAA
				? 'has poor contrast'
				: 'fails contrast guidelines')
	};
	return {
		textColor: _textColor,
		backgroundColor: _backgroundColor,
		contrast,
		report,
		smallAA,
		smallAAA,
		largeAA,
		largeAAA,
		fails
	};
}
