// Skeleton Backgrounds
// https://tailwindcss.com/docs/background-color

import { settings, type CssClasses } from '../settings.js';

export const backgrounds = () => {
	const backgrounds: CssClasses = {};
	settings.colorNames.forEach((n) => {
		// Color Pairings
		// ex: bg-primary-50-950 | bg-primary-950-50
		settings.colorPairings.forEach((p) => {
			backgrounds[`${n}-${p.light}-${p.dark}`] = `@apply bg-${n}-${p.light} dark:bg-${n}-${p.dark}`;
		});
	});
	return backgrounds;
};

export default backgrounds;
