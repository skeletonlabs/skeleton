// Extends Tailwind with Skeleton theme-specific colors values
// Doc: https://tailwindcss.com/docs/customizing-colors#using-css-variables

const settings = require('../settings.cjs');

// ex: `50: 'rgb(var(--color-primary-50) / <alpha-value>)'`
function generatePaletteShades(colorName) {
	const shadeObj = {};
	settings.colorShades.forEach((s) => (shadeObj[s] = `rgb(var(--color-${colorName}-${s}) / <alpha-value>)`));
	return shadeObj;
}

// Generate a a color shade palette 50-900 per each color available
module.exports = () => {
	const paletteObj = {};
	settings.colorNames.forEach((n) => (paletteObj[n] = generatePaletteShades(n)));
	return paletteObj;
};
