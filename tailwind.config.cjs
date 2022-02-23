const colors = require('tailwindcss/colors');

// https://tailwindcss.com/docs/customizing-colors#using-css-variables
function withOpacityValue(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`
		}
		return `rgb(var(${variable}) / ${opacityValue})`
	}
}

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'primary': colors.emerald, // withOpacityValue(`--color-primary`),
				'accent': withOpacityValue(`--color-accent`),
				'surface-light': withOpacityValue('--color-surface-light'),
				'surface-dark': withOpacityValue('--color-surface-dark')
			},
		}
	},
	plugins: []
};
