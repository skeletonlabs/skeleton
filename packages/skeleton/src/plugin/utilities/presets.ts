// Skeleton Presets

import { settings, type CssClasses } from '../settings.js';

// '.preset-foo': { '@apply xxx': {} },
export const utilPresets = () => {
	const classes: CssClasses = {
		// Neutral Presets
		'.preset-filled': { '@apply bg-neutral-950 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-950': {} },
		'.preset-tonal': { '@apply bg-neutral-950/5 dark:bg-neutral-50/5': {} },
		'.preset-outlined': { '@apply ring ring-inset ring-neutral-950 dark:ring-neutral-50': {} }
	};
	// Loop each color name
	settings.colorNames.forEach((n) => {
		// Tonal
		classes[`.preset-tonal-${n}`] = {
			[`@apply bg-${n}-200 dark:bg-${n}-900 text-${n}-700 dark:text-${n}-300`]: {}
		};
		// Loop each color pairing set
		settings.colorPairings.forEach((p) => {
			// Filled
			classes[`.preset-filled-${n}-500`] = {
				[`@apply bg-${n}-500 text-${n}-contrast-500 dark:text-${n}-contrast-500`]: {}
			};
			classes[`.preset-filled-${n}-${p.light}-${p.dark}`] = {
				[`@apply bg-${n}-${p.light}-${p.dark} text-${n}-contrast-${p.light} dark:text-${n}-contrast-${p.dark}`]: {}
			};
			// Outlined
			classes[`.preset-outlined-${n}-500`] = {
				[`@apply ring ring-inset ring-${n}-500`]: {}
			};
			classes[`.preset-outlined-${n}-${p.light}-${p.dark}`] = {
				[`@apply ring ring-inset ring-${n}-${p.light}-${p.dark}`]: {}
			};
		});
	});
	return classes;
};

export default utilPresets;
