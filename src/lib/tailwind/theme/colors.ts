// Extends Tailwind with Skeleton theme-specific colors values
// Doc: https://tailwindcss.com/docs/customizing-colors#using-css-variables

import settings from '../settings.js';

// ex: `50: 'rgb(var(--color-primary-50) / <alpha-value>)'`
function generatePaletteShades(colorName: string): Record<string, string> {
	const shadeObj: Record<string, string> = {};
	settings.colorShades.forEach((s: number) => (shadeObj[s] = `rgb(var(--color-${colorName}-${s}) / <alpha-value>)`));
	return shadeObj;
}

// Generate a a color shade palette 50-900 per each color available
export const generateColorPalette = (): Record<string, Record<string, string>> => {
	const paletteObj: Record<string, Record<string, string>> = {};
	settings.colorNames.forEach((n: string) => (paletteObj[n] = generatePaletteShades(n)));
	return paletteObj;
};
