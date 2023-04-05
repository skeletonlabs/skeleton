// The Skeleton Intellisense Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/docs/get-started

import plugin from 'tailwindcss/plugin';

const intellisensePlugin = plugin(({ addComponents }) => {
	// The following will generate the non-token classes PURELY for Intellisense.
	// These are excluded from production, which means we still need to lean into
	// using the `all.css` stylesheet to import non-token styles.
	if (process.env.NODE_ENV !== 'production') {
		// try/catch because it will throw when allComponents.cjs isn't generated yet
		try {
			import('./generated/intellisense-classes.cjs').then((all) => {
				// @ts-ignore-next-line
				addComponents(all , {
					respectImportant: true,
					respectPrefix: true
				});
			})
			
		} catch (error: unknown) {
			console.log('Intellisense classes not generated yet.');
		}
	}
});

export default intellisensePlugin;
