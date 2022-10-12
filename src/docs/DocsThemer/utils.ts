// Doc Themer Helper Functions

import { get } from 'svelte/store';

// @ts-ignore
import paletteGenerator from '@bobthered/tailwindcss-palette-generator';
import { tailwindDefaultColors } from '../../lib/tailwind/colors';
import { storeTailwindPalette, storeTailwindForm, storeHexPalette } from './stores';

// Tailwind ---

// Get a Particular Color
export function getTailwindColor(colorName: string): any {
	return tailwindDefaultColors.find((c) => c.label === colorName);
}

// Pick Random Color
export function randomTailwindColor(): any {
	return tailwindDefaultColors[(Math.random() * tailwindDefaultColors.length) | 0];
}

// On selection change
export function onTailwindSelect(): void {
	storeTailwindPalette.set({
		primary: getTailwindColor(get(storeTailwindForm).primary),
		accent: getTailwindColor(get(storeTailwindForm).accent),
		ternary: getTailwindColor(get(storeTailwindForm).ternary),
		warning: getTailwindColor(get(storeTailwindForm).warning),
		surface: getTailwindColor(get(storeTailwindForm).surface)
	});
}

// On randomize button click
export function onRandomize(): void {
	const newColors: any = {
		primary: randomTailwindColor(),
		accent: randomTailwindColor(),
		warning: randomTailwindColor(),
		ternary: randomTailwindColor(),
		surface: randomTailwindColor()
	};
	storeTailwindForm.set({
		primary: newColors.primary.label,
		accent: newColors.accent.label,
		ternary: newColors.ternary.label,
		warning: newColors.warning.label,
		surface: newColors.surface.label
	});
	storeTailwindPalette.set({
		primary: newColors.primary,
		accent: newColors.accent,
		warning: newColors.warning,
		ternary: newColors.ternary,
		surface: newColors.surface
	});
}

// Hex ---

// Generate Hex Palette - Source: https://github.com/bobthered/tailwindcss-palette-generator
export function genHexPalette(key: string, hexColor: string): any {
	// Generate base palette
	const hexShades: any = paletteGenerator({ names: [key], colors: [hexColor] });
	delete hexShades[key][950]; // drop swatch 950
	// Generate RGB values and map data structure
	let hexRgbShades: any = {};
	let shadeValues: string[] = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
	Object.values(hexShades[key]).forEach((hexColor, i) => {
		hexRgbShades[shadeValues[i]] = { hex: hexColor, rgb: hexToRgb(hexColor) };
	});
	// Update Hex Palette
	return { label: key, shades: hexRgbShades, source: hexColor };
}

// Hex -> RGB - Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export function hexToRgb(hex: any): string {
	hex = hex.replace('#', '');
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (result) {
		const color = { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) };
		return `${color.r} ${color.g} ${color.b}`;
	}
	return '(invalid)';
}

// On Input Change
export function onHexInput(key: string, hexColor: string): void {
	const regexValidHexCode = new RegExp(/^#[0-9a-f]{6}$/i);
	if (regexValidHexCode.test(hexColor)) {
		// Generate Palette
		get(storeHexPalette)[key] = genHexPalette(key, hexColor);
	}
}

// CSS Generation ---

export function genCssColorStrings(colorKey: string, colorSet: any): string {
	let css: string = '';
	Object.entries(colorSet.shades).forEach((set: any, i: number) => {
		const [key, v] = set;
		css += i === 0 ? '' : '\n' + '\t';
		css += `--color-${colorKey}-${key}: ${v['rgb']}; /* ⬅ ${v['hex']} */`;
	});
	return css;
}

// Local Storage ---

export function resetSettings(): void {
	if (confirm('Clear all theme settings and restore the site back to the default settings?')) {
		// Clear Local Storage Values
		localStorage.removeItem('storeMode');
		localStorage.removeItem('storePreview');
		localStorage.removeItem('storeTailwindForm');
		localStorage.removeItem('storeTailwindPalette');
		localStorage.removeItem('storeHexForm');
		localStorage.removeItem('storeHexPalette');
		// Reload Window
		location.reload();
	}
}
