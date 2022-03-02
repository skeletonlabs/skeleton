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
	content: [
		// This makes Tailwind aware of the imported packages component's inline classes
		// If node_modules not in the root URL, users may need to adjust their TW config
		'./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'
	],
    theme: {
		extend: {
			// Extend the color with the CSS variable values
			// NOTE: Must be RGB to allow for TW opacity value
			colors: {
				'primary': createColorSet('primary'),
				'accent': createColorSet('accent'),
				'warning': createColorSet('warning'),
				'surface': createColorSet('surface'),
			},
		}
	},
})
