// The Skeleton Intellisense Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/docs/get-started

import plugin from 'tailwindcss/plugin.js';
import { readFileSync } from 'fs';

export const intellisensePlugin = plugin(({ addComponents }) => {
	// The following will generate the non-token classes PURELY for Intellisense.
	// These are excluded from production, which means we still need to lean into
	// using the `skeleton.css` stylesheet to import non-token styles.
	if (process.env.NODE_ENV !== 'production') {
		// try/catch because it will throw when allComponents.cjs isn't generated yet
		try {
			const all = readFileSync('./generated/intellisense-classes.js', 'utf8');
			const classes = JSON.parse(all);
			addComponents(classes, {
				respectImportant: true,
				respectPrefix: true
			});
		} catch {
			// something went wrong
		}
	}
});

export default intellisensePlugin;
