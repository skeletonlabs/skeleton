// Design Tokens: Text
// Doc: https://www.skeleton.dev/docs/tokens

import settings from '../settings';

interface TextClasses {
	[key: string]: Record<string, string>;
}

export default (): TextClasses => {
	const classes: TextClasses = {
		// Font Family
		'.font-heading-token': { 'font-family': 'var(--theme-font-family-heading)' },
		'.font-token': { 'font-family': 'var(--theme-font-family-base)' },
		// Default Text Colors
		'.text-base-token': { color: 'rgba(var(--theme-font-color-base))' },
		'.text-dark-token': { color: 'rgba(var(--theme-font-color-dark))' },
		// Light/Dark Text Color  - ex: .text-token
		'.text-token': { color: 'rgba(var(--theme-font-color-base))' },
		'.dark .text-token': { color: 'rgba(var(--theme-font-color-dark))' }
	};
	settings.colorNames.forEach((n: string) => {
		// On-X Text Colors
		// Example: .text-on-primary-token
		classes[`.text-on-${n}-token`] = { color: `rgb(var(--on-${n}))` };

		// Color Pairings
		// Example: .text-primary-50-900-token | .text-primary-900-50-token
		settings.colorPairings.forEach((p: { light: number; dark: number }) => {
			classes[`.text-${n}-${p.light}-${p.dark}-token`] = { color: `rgb(var(--color-${n}-${p.light}))` };
			classes[`.dark .text-${n}-${p.light}-${p.dark}-token`] = { color: `rgb(var(--color-${n}-${p.dark}))` };
		});
	});
	return classes;
};
