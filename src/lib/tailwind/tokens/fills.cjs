// Design Tokens: SVG Fill
// Doc: https://www.skeleton.dev/docs/tokens

const settings = require('../settings.cjs');

module.exports = () => {
	const classes = {
		'.fill-base-token': { fill: 'rgba(var(--theme-font-color-base))' },
		'.fill-dark-token': { fill: 'rgba(var(--theme-font-color-dark))' },
		// Fill Token - ex: .fill-token
		'.fill-token': { fill: 'rgba(var(--theme-font-color-base))' },
		'.dark .fill-token': { fill: 'rgba(var(--theme-font-color-dark))' }
	};
	settings.colorNames.forEach((n) => {
		// On-X Fill Colors
		// Example: .fill-on-primary-token
		classes[`.fill-on-${n}-token`] = { fill: `rgb(var(--on-${n}))` };
	});
	return classes;
};
