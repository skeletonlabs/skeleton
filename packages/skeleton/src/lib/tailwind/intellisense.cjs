// The Skeleton Intellisense Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/docs/get-started

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents }) => {
	// The following will generate the non-token classes PURELY for Intellisense.
	// These are excluded from production, which means we still need to lean into
	// using the `skeleton.css` stylesheet to import non-token styles.
	if (process.env.NODE_ENV !== 'production') {
		// try/catch because it will throw when allComponents.cjs isn't generated yet
		try {
			const all = require('./generated/intellisense-classes.cjs');
			addComponents(all, {
				respectImportant: true,
				respectPrefix: true
			});
		} catch {}
	}
});
