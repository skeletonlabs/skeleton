// Skeleton Tailwind Plugin - Theme Colors
// - Extends color palette to accept themeable CSS variables

const plugin = require('tailwindcss/plugin');

// Source: https://tailwindcss.com/docs/customizing-colors#using-css-variables

function createColorSet(colorName) {
	return {
		50: `rgb(var(--color-${colorName}-50) / <alpha-value>)`,
		100: `rgb(var(--color-${colorName}-100) / <alpha-value>)`,
		200: `rgb(var(--color-${colorName}-200) / <alpha-value>)`,
		300: `rgb(var(--color-${colorName}-300) / <alpha-value>)`,
		400: `rgb(var(--color-${colorName}-400) / <alpha-value>)`,
		500: `rgb(var(--color-${colorName}-500) / <alpha-value>)`,
		600: `rgb(var(--color-${colorName}-600) / <alpha-value>)`,
		700: `rgb(var(--color-${colorName}-700) / <alpha-value>)`,
		800: `rgb(var(--color-${colorName}-800) / <alpha-value>)`,
		900: `rgb(var(--color-${colorName}-900) / <alpha-value>)`
	};
}

module.exports = plugin(() => {}, {
	theme: {
		extend: {
			// Extend the colors with the CSS variable values
			// NOTE: Must be RGB to allow for TW opacity value
			colors: {
				primary: createColorSet('primary'),
				accent: createColorSet('accent'),
				tertiary: createColorSet('tertiary'),
				warning: createColorSet('warning'),
				surface: createColorSet('surface')
			}
		}
	}
});
