// Design Tokens: Borders
// Doc: https://www.skeleton.dev/docs/tokens

import { settings, type CssClasses } from '../settings.js';

export const borders = (): CssClasses => {
	const classes: CssClasses = {
		// Border Width - ex: .border-token
		'.border-token': { 'border-width': 'var(--theme-border-base)' }
	};
	settings.colorNames.forEach((n) => {
		// Color Pairings
		// Example: .border-primary-50-900-token | .border-primary-900-50-token
		settings.colorPairings.forEach((p) => {
			classes[`.border-${n}-${p.light}-${p.dark}-token`] = { 'border-color': `rgb(var(--color-${n}-${p.light}))` };
			classes[`.dark .border-${n}-${p.light}-${p.dark}-token`] = { 'border-color': `rgb(var(--color-${n}-${p.dark}))` };
		});
	});
	return classes;
};

export default borders;
