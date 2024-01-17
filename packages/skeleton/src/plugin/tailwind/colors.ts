// Extends Tailwind with Skeleton theme-specific colors values
// Doc: https://tailwindcss.com/docs/customizing-colors#using-css-variables

import settings from './settings.js';

type Shade = { [shadeValue: number]: string };

// base: `50: 'rgb(var(--color-primary-50) / <alpha-value>)'`
// contrast: `50: 'rgb(var(--color-primary-50-contrast) / <alpha-value>)'`
function generatePaletteContrast(colorName: string, suffix: string) {
	const shadeObj: Shade = {};
	settings.colorShades.forEach((s) => (shadeObj[s] = `rgb(var(--color-${colorName}-${s}${suffix}) / <alpha-value>)`));
	return shadeObj;
}

type Palette = { [colorName: string]: Shade };

// Generate a a color shade palette 50-950 per each color available
export const colors = () => {
	const basePalette: Palette = {};
	const contrastPalette: Palette = {};
	settings.colorNames.forEach((n) => (basePalette[n] = generatePaletteContrast(n, '')));
	settings.colorNames.forEach((n) => (contrastPalette[`${n}-contrast`] = generatePaletteContrast(n, '-contrast')));

	console.log({ ...basePalette, ...contrastPalette });

	return { ...basePalette, ...contrastPalette };
};

export default colors;
