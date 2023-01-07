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
		// Don't want to load all components in production
		if (process.env.NODE_ENV !== 'production') {
			// try/catch because it will throw when allComponents.cjs isn't generated yet
			try {
				const all = require('./generated/allComponents.cjs');
				// Tokens are already loaded as utilities so we'll delete them to prevent duplicate rules
				for (const [key, _] of Object.entries(all)) {
					if (key.includes('token')) {
						delete all[key];
					}
				}
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
