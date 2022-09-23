// Doc Themer Helper Functions

// @ts-ignore
import paletteGenerator from '@bobthered/tailwindcss-palette-generator';
import { colorsTailwind } from './colors';

// Talwind: Find Color
export function getTailwindColor(colorName: string): any {
	return colorsTailwind.find((c) => c.label === colorName);
}

// Tailwind: Pick Random Color
export function randomTailwindColor(): any {
	return colorsTailwind[(Math.random() * colorsTailwind.length) | 0];
}

// Hex: Source: https://github.com/bobthered/tailwindcss-palette-generator
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

// Hex: Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export function hexToRgb(hex: any): string {
	hex = hex.replace('#', '');
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (result) {
		const color = { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) };
		return `${color.r} ${color.g} ${color.b}`;
	}
	return '(invalid)';
}

// Shared: Generates the CSS snippet
export function generateCssCode(isTailwind: boolean, currentPalette: any): string {
	let css: string = '';
	Object.entries(currentPalette).forEach((set: any, i: number) => {
		const [key, v] = set;
		// Generate label
		const generatedLabel: string = v.source ? v.source : v.label + ' | ' + v.shades['500'].hex;
		// Set First Row of Set
		css += `${i === 0 ? `\t/* =~= Skeleton Theme | ${isTailwind ? 'Tailwind' : 'Custom'} =~= */\n` : '\n'}\t/* ~ ${key} (${generatedLabel}) ~ */`;
		// Per each entry, add custom property key/value row
		Object.entries(v.shades).forEach((shade: any) => {
			const [shadeKey, shadeValue] = shade;
			css += `\n\t--color-${key}-${shadeKey}: ${shadeValue['rgb']}; /* ⬅ ${shadeValue['hex']} */`;
		});
	});
	return `:root {\n${css}\n}`;
}
