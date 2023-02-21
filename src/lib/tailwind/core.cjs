// The Skeleton Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/docs/get-started

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
	({ addUtilities }) => {
		addUtilities({
			// Implement Skeleton design token classes
			...tokensBackgrounds(),
			...tokensBorders(),
			...tokensBorderRadius(),
			...tokensFills(),
			...tokensText(),
			...tokensRings()
		});
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
