// Skeleton Tailwind Plugin
// - Extends color palette to accept themeable CSS variables

const plugin = require('tailwindcss/plugin');

// Source: https://tailwindcss.com/docs/customizing-colors#using-css-variables
function rgbAppendOpacity(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`
		}
		return `rgb(var(${variable}) / ${opacityValue})`
	}
}

function createColorSet(colorName) {
	return {
		50: rgbAppendOpacity(`--color-${colorName}-50`),
		100: rgbAppendOpacity(`--color-${colorName}-100`),
		200: rgbAppendOpacity(`--color-${colorName}-200`),
		300: rgbAppendOpacity(`--color-${colorName}-300`),
		400: rgbAppendOpacity(`--color-${colorName}-400`),
		500: rgbAppendOpacity(`--color-${colorName}-500`),
		600: rgbAppendOpacity(`--color-${colorName}-600`),
		700: rgbAppendOpacity(`--color-${colorName}-700`),
		800: rgbAppendOpacity(`--color-${colorName}-800`),
		900: rgbAppendOpacity(`--color-${colorName}-900`)
	};
}

module.exports = plugin(() => {}, {
    theme: {
		extend: {
			// Extend the colors with the CSS variable values
			// NOTE: Must be RGB to allow for TW opacity value
			colors: {
				'primary': createColorSet('primary'),
				'accent': createColorSet('accent'),
				'warning': createColorSet('warning'),
				'surface': createColorSet('surface'),
				// ---
				'progress': rgbAppendOpacity('--color-progress-bar')
			},
		}
	},
})
