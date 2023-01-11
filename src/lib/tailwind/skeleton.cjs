// The Skeleton Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/guides/tailwind

const plugin = require('tailwindcss/plugin');

// Skeleton Theme Modules
const themeColors = require('./theme/colors.cjs');
// Skeleton Design Token Modules
const tokensBackgrounds = require('./tokens/backgrounds.cjs');
const tokensBorders = require('./tokens/borders.cjs');
const tokensBorderRadius = require('./tokens/border-radius.cjs');
const tokensFills = require('./tokens/fills.cjs');
const tokensText = require('./tokens/text.cjs');
const tokensRings = require('./tokens/rings.cjs');

module.exports = plugin(
	({ addUtilities, addComponents }) => {
		addUtilities({
			// Implement Skeleton design token classes
			...tokensBackgrounds(),
			...tokensBorders(),
			...tokensBorderRadius(),
			...tokensFills(),
			...tokensText(),
			...tokensRings()
		});
		// The following will generate the non-token classes PURELY for Intellisense.
		// These are excluded from production, which means we still need to lean into
		// using the `all.css` stylesheet to import non-token styles.
		if (process.env.NODE_ENV !== 'production') {
			// try/catch because it will throw when allComponents.cjs isn't generated yet
			try {
				console.log('GENERATING ALL COMPONENTS');
				const all = require('./generated/allComponents.cjs');
				addComponents(all, {
					respectImportant: true,
					respectPrefix: true
				});
			} catch {}
		}
	},
	{
		theme: {
			extend: {
				// Implement Skeleton theme colors
				colors: themeColors()
			}
		}
	}
);
