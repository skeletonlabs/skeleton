// Skeleton Tailwind Plugin - Typography
// backgroundColor: theme('colors.primary.500'),

const plugin = require('tailwindcss/plugin');

module.exports = plugin(
	({ addBase, theme }) => {
		// Add Base Styles
		addBase({
			// Headings
			['h1']: {
				fontWeight: 'bold',
				fontSize: '1.875rem',
				lineHeight: '2.25rem',
				'@media (min-width: 768px)': {
					fontSize: '2.25rem',
					lineHeight: '2.5rem'
				}
			},
			['h2']: {
				fontWeight: 'bold',
				fontSize: "1.5rem",
				lineHeight: "2rem",
				'@media (min-width: 768px)': {
					fontSize: '1.875rem',
					lineHeight: '2.25rem',
				}
			},
			['h3']: {
				fontWeight: 'bold',
				fontSize: "1.25rem",
				lineHeight: "1.75rem",
				'@media (min-width: 768px)': {
					fontSize: "1.5rem",
					lineHeight: "2rem",
				}
			},
			['h4']: {
				fontWeight: 'bold',
				fontSize: "1.125rem",
				lineHeight: "1.75rem",
				'@media (min-width: 768px)': {
					fontSize: "1.25rem",
					lineHeight: "1.75rem",
				}
			},
			['h5']: {
				fontWeight: 'bold',
				fontSize: "1rem",
				lineHeight: "1.5rem",
				'@media (min-width: 768px)': {
					fontSize: "1.125rem",
					lineHeight: "1.75rem",
				}
			},
			['h6']: {
				fontWeight: 'bold',
				fontSize: "0.875rem",
				lineHeight: "1.25rem",
				'@media (min-width: 768px)': {
					fontSize: "1rem",
					lineHeight: "1.5rem",
				}
			},
			// Elements
			['p']: {
				fontSize: "1rem",
				lineHeight: "1.5rem",
				color: theme('colors.black'),
				'.dark &': {
					color: theme('colors.white'),
				},
			},
			['a:not(.btn-icon):not(.btn):not(.comp-button):not(.list-row):not(.drawer a):not(.app-bar a):not(.logo-item):not(.comp-card):not(.card):not(.list-nav a)']: {
				textDecorationLine: 'underline',
				textUnderlineOffset: '4px',
				textDecorationColor: `rgb(var(--color-primary-500)/0.2)`,
				textDecorationStyle: 'dotted',
				color: theme('colors.primary.600'),
				'.dark &': {
					color: theme('colors.primary.400'),
				},
				'&:hover': {
					color: theme('colors.primary.500'),
				},
			},
			['blockquote']: {
				fontSize: "1rem",
				lineHeight: "1.5rem",
				borderLeft: `4px solid ${theme('colors.accent.500')}`,
				paddingLeft: '1rem'
			},
			// TODO: kbd
			// TODO: pre
			// TODO: code
		})
	}
);
