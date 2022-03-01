const colors = require('tailwindcss/colors');

// Source: https://tailwindcss.com/docs/customizing-colors#using-css-variables
function withOpacityValue(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`
		}
		return `rgb(var(${variable}) / ${opacityValue})`
	}
}

// Set these css vars in global styles :root 
const themeDefaultRgb = {
	'primary': {
		50: withOpacityValue('--color-primary-50'),
		100: withOpacityValue('--color-primary-100'),
		200: withOpacityValue('--color-primary-200'),
		300: withOpacityValue('--color-primary-300'),
		400: withOpacityValue('--color-primary-400'),
		500: withOpacityValue('--color-primary-500'),
		600: withOpacityValue('--color-primary-600'),
		700: withOpacityValue('--color-primary-700'),
		800: withOpacityValue('--color-primary-800'),
		900: withOpacityValue('--color-primary-900')
	},
	'accent': {
		50: withOpacityValue('--color-accent-50'),
		100: withOpacityValue('--color-accent-100'),
		200: withOpacityValue('--color-accent-200'),
		300: withOpacityValue('--color-accent-300'),
		400: withOpacityValue('--color-accent-400'),
		500: withOpacityValue('--color-accent-500'),
		600: withOpacityValue('--color-accent-600'),
		700: withOpacityValue('--color-accent-700'),
		800: withOpacityValue('--color-accent-800'),
		900: withOpacityValue('--color-accent-900')
	},
	'warning': {
		50: withOpacityValue('--color-warning-50'),
		100: withOpacityValue('--color-warning-100'),
		200: withOpacityValue('--color-warning-200'),
		300: withOpacityValue('--color-warning-300'),
		400: withOpacityValue('--color-warning-400'),
		500: withOpacityValue('--color-warning-500'),
		600: withOpacityValue('--color-warning-600'),
		700: withOpacityValue('--color-warning-700'),
		800: withOpacityValue('--color-warning-800'),
		900: withOpacityValue('--color-warning-900')
	},
	'surface': {
		50: withOpacityValue('--color-surface-50'),
		100: withOpacityValue('--color-surface-100'),
		200: withOpacityValue('--color-surface-200'),
		300: withOpacityValue('--color-surface-300'),
		400: withOpacityValue('--color-surface-400'),
		500: withOpacityValue('--color-surface-500'),
		600: withOpacityValue('--color-surface-600'),
		700: withOpacityValue('--color-surface-700'),
		800: withOpacityValue('--color-surface-800'),
		900: withOpacityValue('--color-surface-900')
	},
};

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: themeDefaultRgb,
		}
	},
	plugins: []
};
