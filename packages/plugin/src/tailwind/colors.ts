// Extends Tailwind with Skeleton theme-specific colors values
// Doc: https://tailwindcss.com/docs/customizing-colors#using-css-variables

import settings from './settings.js';

type Shade = { [shadeValue: number]: string };

// ex: `50: 'rgb(var(--color-primary-50) / <alpha-value>)'`
function generatePaletteShades(colorName: string) {
	const shadeObj: Shade = {};
	settings.colorShades.forEach((s) => (shadeObj[s] = `rgb(var(--color-${colorName}-${s}) / <alpha-value>)`));
	return shadeObj;
}

type Palette = { [colorName: string]: Shade };

// Generate a a color shade palette 50-900 per each color available
export const colors = () => {
	const paletteObj: Palette = {};
	settings.colorNames.forEach((n) => (paletteObj[n] = generatePaletteShades(n)));
	return paletteObj;
};

export default colors;
