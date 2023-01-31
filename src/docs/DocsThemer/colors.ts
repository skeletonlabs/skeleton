// This script is based 'tailwindcolorshades' by Javis V. Pérez:
// https://github.com/javisperez/tailwindcolorshades/blob/master/src/composables/colors.ts

import * as easingFunctions from 'svelte/easing';

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

function rgbToHex(r: number, g: number, b: number) {
	return '#' + (b | (g << 8) | (r << 16) | (1 << 24)).toString(16).slice(1);
}

export function generateA11yOnColor(hex: string): '255 255 255' | '0 0 0' {
	const rgbColor = hexToRgb(hex);

	if (!rgbColor) {
		return '0 0 0';
	}

	const luma = luminance(rgbColor);

	return luma < 120 ? '255 255 255' : '0 0 0'; // white | black
}

function lighten(hex: string, intensity: number, distanceFromCentre: number): string {
	// if distanceFromCentre is 0, we want to pad it out a bit
	distanceFromCentre = distanceFromCentre === 0 ? 0.15 : distanceFromCentre;
	const color = hexToRgb(`#${hex}`);
	if (!color) return '';
	const { r, g, b } = color;
	const hsl = rgbToHsl(r, g, b);
	const hueDistanceToTravel = getDistanceToNearestHue(hsl.h) * easingFunctions.sineInOut(distanceFromCentre);
	const alteredHsl = {
		h: hsl.h + hueDistanceToTravel,
		s: hsl.s,
		// we want the lightness to go up to close to 100% but not quite
		l: hsl.l + (100 - hsl.l) * intensity
	};
	const rotatedRgb = hslToRgb(alteredHsl.h, alteredHsl.s, alteredHsl.l);
	const result = rgbToHex(rotatedRgb.r, rotatedRgb.g, rotatedRgb.b);
	// console.log('%c original HEX', `color: ${hex};`, hex);
	// console.log('%c original RGB', `color: rgb(${color.r} ${color.g} ${color.b})`, color);
	// console.log('%c HSL', `color: hsl(${hsl.h} ${hsl.s}% ${hsl.l}%)`, hsl);
	// console.log('%c altered HSL', `color: hsl(${alteredHsl.h} ${alteredHsl.s}% ${alteredHsl.l}%)`, alteredHsl);
	// console.log('%c changed RGB', `color: rgb(${rotatedRgb.r} ${rotatedRgb.g} ${rotatedRgb.b})`, rotatedRgb);
	// console.log('%c result HEX', `color: ${result};`, result);
	return result;
}

function darken(hex: string, intensity: number, distanceFromCentre: number): string {
	// if distanceFromCentre is 0, we want to pad it out a bit
	distanceFromCentre = distanceFromCentre === 0 ? 0.2 : distanceFromCentre;

	const hueFraction = distanceFromCentre + 0.25;
	const color = hexToRgb(`#${hex}`);
	if (!color) return '';
	const { r, g, b } = color;
	const hsl = rgbToHsl(r, g, b);
	const hueDistanceToTravel = getDistanceToNearestHue(hsl.h, true) * easingFunctions.sineInOut(distanceFromCentre);
	const alteredHsl = {
		h: hsl.h + hueDistanceToTravel,
		s: Math.min(hsl.s * (1 + easingFunctions.sineIn(distanceFromCentre)), 100),
		l: hsl.l * (1.1 - easingFunctions.linear(distanceFromCentre))
		// l: hsl.l * (1 - distanceFromCentre)
	};
	console.log({ distanceFromCentre, hueDistanceToTravel, alteredHsl, func: easingFunctions.quadOut(hueFraction) });
	const rotatedRgb = hslToRgb(alteredHsl.h, alteredHsl.s, alteredHsl.l);
	const result = rgbToHex(rotatedRgb.r, rotatedRgb.g, rotatedRgb.b);
	// console.log('%c original HEX', `color: ${hex};`, hex);
	// console.log('%c original RGB', `color: rgb(${color.r} ${color.g} ${color.b})`, color);
	// console.log('%c HSL', `color: hsl(${hsl.h} ${hsl.s}% ${hsl.l}%)`, hsl);
	// console.log('%c altered HSL', `color: hsl(${alteredHsl.h} ${alteredHsl.s}% ${alteredHsl.l}%)`, alteredHsl);
	// console.log('%c changed RGB', `color: rgb(${rotatedRgb.r} ${rotatedRgb.g} ${rotatedRgb.b})`, rotatedRgb);
	// console.log('%c result HEX', `color: ${result};`, result);
	return result;
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

	const rgb500 = hexToRgb(hex500);
	if (!rgb500) throw new Error('Invalid color');
	[400, 300, 200, 100, 50].forEach((level, i, arr) => {
		const hex = lighten(hex500, intensityMap[level], i / arr.length);
		response[level] = { hex, rgb: hextoTailwindRgbString(hex), on: generateA11yOnColor(hex) };
	});
	console.group('%c original HEX', `color: ${hex500};`, hex500);
	[600, 700, 800, 900].forEach((level, i, arr) => {
		const hex = darken(hex500, intensityMap[level], i / arr.length);
		response[level] = { hex, rgb: hextoTailwindRgbString(hex), on: generateA11yOnColor(hex) };
	});
	console.groupEnd();

	return response as Palette;
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h as [0, 360], s as [0, 100], and l as [0, 100].
 *
 * @param   number  r       The red color value
 * @param   number  g       The green color value
 * @param   number  b       The blue color value
 * @return The HSL representation
 */
export function rgbToHsl(r: number, g: number, b: number) {
	// console.log({ r, g, b });
	(r /= 255), (g /= 255), (b /= 255);

	const max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	let h: number, s: number;
	const l: number = (max + min) / 2;

	if (max === min) {
		h = s = 0; // achromatic
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
			default:
				throw new Error('Invalid color');
		}

		h /= 6;
	}

	return { h: h * 360, s: s * 100, l: l * 100 };
}

const hslToRgb = (h: number, s: number, l: number) => {
	s /= 100;
	l /= 100;
	const k = (n: number) => (n + h / 30) % 12;
	const a = s * Math.min(l, 1 - l);
	const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
	return { r: 255 * f(0), g: 255 * f(8), b: 255 * f(4) };
};

/**
 * Finds the nearest hue- 60deg, 180deg, or 300deg, as suggested by Adam Wathan in Refactoring UI
 * @see Refactoring UI p. 136
 */
function getNearestHue(h: number, isDark?: boolean): number {
	const hues = isDark ? [0, 120, 240] : [60, 180, 300];
	const closest = hues.reduce((prev, curr) => (Math.abs(curr - h) < Math.abs(prev - h) ? curr : prev));
	const difference = Math.abs(closest - h);
	// if the difference is less than 5 then we need to pick another one
	if (difference < 5) {
		const index = hues.indexOf(closest);
		const nextIndex = (index + 1) % hues.length;
		return hues[nextIndex];
	}
	return closest;
}

function getDistanceToNearestHue(h: number, isDark?: boolean): number {
	// limit to 15 degrees at most so it doesn't look totally different
	const hueDistanceLimit = 10;
	const closest = getNearestHue(h, isDark);
	// remember whether we're meant to be dealing with a negative number
	const isGoingDown = h > closest;
	// calculating as a positive so we can use Math.min to keep it within the limit
	const distance = isGoingDown ? h - closest : closest - h;
	const limitedResult = Math.min(distance, hueDistanceLimit);
	const result = isGoingDown ? -limitedResult : limitedResult;
	return result;
}

/** Takes the RGB and returns the luminance of it */
function luminance(r: Rgb, g?: number, b?: number): number;
function luminance(r: number | Rgb, g?: number, b?: number) {
	const { _r, _g, _b } = typeof r === 'object' ? { _r: r.r, _g: r.g, _b: r.b } : { _r: r, _g: g, _b: b }; // I'm not really happy with this ternary, but it works
	// we can't use !_r shorthand here because 0 is a valid value
	if (_r === undefined || _g === undefined || _b === undefined) throw new Error('Invalid RGB value!');
	const a = [_r, _g, _b].map(function (v) {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
