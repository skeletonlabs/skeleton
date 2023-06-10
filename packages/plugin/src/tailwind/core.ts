// The Skeleton Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/docs/get-started

import plugin from 'tailwindcss/plugin.js';

// Skeleton Theme Modules
import themeColors from './theme/colors.js';
// Skeleton Design Token Modules
import tokensBackgrounds from './tokens/backgrounds.js';
import tokensBorders from './tokens/borders.js';
import tokensBorderRadius from './tokens/border-radius.js';
import tokensFills from './tokens/fills.js';
import tokensText from './tokens/text.js';
import tokensRings from './tokens/rings.js';

// these are the crimes we commit because they decided to not export their types :]
type CSSRuleObject = Omit<Parameters<Parameters<Parameters<typeof plugin>['0']>['0']['addUtilities']>['0'], 'CSSRuleObject[]'>;

export const corePlugin = plugin(
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

export default corePlugin;
