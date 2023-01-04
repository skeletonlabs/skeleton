// The Skeleton Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/guides/tailwind

const plugin = require('tailwindcss/plugin');

// Skeleton Modules
const themeColors = require('./theme/colors.cjs');
const tokensBackgrounds = require('./tokens/backgrounds.cjs');

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		// Implement design token classes
		...tokensBackgrounds()
	})
},
	{
		theme: {
			extend: {
				// Implement theme colors
				colors: themeColors()
			}
		}
	}
);
