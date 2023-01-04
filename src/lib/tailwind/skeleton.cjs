// The Skeleton Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/guides/tailwind

const plugin = require('tailwindcss/plugin');

// Skeleton Theme Modules
const themeColors = require('./theme/colors.cjs');
// Skeleton Design Token Modules
const tokensBackgrounds = require('./tokens/backgrounds.cjs');
const tokensBorders = require('./tokens/borders.cjs');

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		// Implement Skeleton design token classes
		...tokensBackgrounds(),
		...tokensBorders()
	})
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
