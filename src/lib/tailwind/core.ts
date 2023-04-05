// The Skeleton Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/docs/get-started

import plugin from 'tailwindcss/plugin';

// Skeleton Theme Modules
import { generateColorPalette } from './theme/colors';
// Skeleton Design Token Modules
import tokensBackgrounds from './tokens/backgrounds.js';
import tokensBorders from './tokens/borders.js';
import tokensBorderRadius from './tokens/border-radius.js';
import tokensFills from './tokens/fills.js';
import tokensText from './tokens/text.js';
import tokensRings from './tokens/rings.js';

const skeletonPlugin = plugin(
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
				colors: generateColorPalette()
			}
		}
	}
);

export default skeletonPlugin;
