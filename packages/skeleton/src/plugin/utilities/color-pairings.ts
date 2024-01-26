/*
Skeleton Color Pairings
ex: {property}-primary-50-950 | {property}-primary-950-50
---
* bg - https://tailwindcss.com/docs/background-color
* text - https://tailwindcss.com/docs/text-color
* border - https://tailwindcss.com/docs/border-color
* ring - https://tailwindcss.com/docs/ring-color
* accent - https://tailwindcss.com/docs/accent-color
* shadow - https://tailwindcss.com/docs/box-shadow
* decoration - https://tailwindcss.com/docs/text-decoration-color
* divide - https://tailwindcss.com/docs/divide-color
* outline - https://tailwindcss.com/docs/outline-color
* caret - https://tailwindcss.com/docs/caret-color
* stroke - https://tailwindcss.com/docs/stroke
*/

import { settings, type CssClasses } from '../settings.js';

function directional(key: string) {
	return [key, `${key}-t`, `${key}-b`, `${key}-l`, `${key}-r`];
}

export const utilColorPairings = () => {
	const properties = [
		'bg',
		'text',
		...directional('border'),
		'ring',
		'accent',
		'shadow',
		'decoration',
		'divide',
		'outline',
		'caret',
		'stroke'
	];
	const classes: CssClasses = {};
	// Loop each color name
	settings.colorNames.forEach((n) => {
		// Loop each property
		properties.forEach((property) => {
			// Loop each color pairing set
			settings.colorPairings.forEach((p) => {
				// Generate the class name
				classes[`.${property}-${n}-${p.light}-${p.dark}`] = {
					// Generate the @apply styles
					[`@apply ${property}-${n}-${p.light} dark:${property}-${n}-${p.dark}`]: {}
				};
			});
		});
	});
	return classes;
};

export default utilColorPairings;
