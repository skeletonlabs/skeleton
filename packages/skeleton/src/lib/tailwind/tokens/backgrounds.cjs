// Design Tokens: Background
// Doc: https://www.skeleton.dev/docs/tokens

const settings = require('../settings.cjs');

// Defaults
const backdropAlpha = 0.7;
const hoverAlpha = 0.1;

module.exports = () => {
	const classes = {};
	settings.colorNames.forEach((n) => {
		// Backdrops
		// Example: .bg-primary-backdrop-token
		classes[`.bg-${n}-backdrop-token`] = { 'background-color': `rgb(var(--color-${n}-400) / ${backdropAlpha})` };
		classes[`.dark .bg-${n}-backdrop-token`] = { 'background-color': `rgb(var(--color-${n}-900) / ${backdropAlpha})` };

		// Hover
		// Example: .bg-primary-hover-token
		classes[`.bg-${n}-hover-token:hover`] = { 'background-color': `rgb(var(--color-${n}-500) / ${hoverAlpha})` };
		classes[`.dark .bg-${n}-hover-token:hover`] = { 'background-color': `rgb(var(--color-${n}-200) / ${hoverAlpha})` };

		// Active
		// Example: .bg-primary-active-token
		classes[`.bg-${n}-active-token`] = {
			'background-color': `rgb(var(--color-${n}-500)) !important`,
			color: `rgb(var(--on-${n}))`,
			fill: `rgb(var(--on-${n}))`
		};

		// Color Pairings
		// Example: .bg-primary-50-900-token | .bg-primary-900-50-token
		settings.colorPairings.forEach((p) => {
			classes[`.bg-${n}-${p.light}-${p.dark}-token`] = { 'background-color': `rgb(var(--color-${n}-${p.light}))` };
			classes[`.dark .bg-${n}-${p.light}-${p.dark}-token`] = { 'background-color': `rgb(var(--color-${n}-${p.dark}))` };
		});
	});
	return classes;
};
