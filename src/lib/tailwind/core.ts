// The Skeleton Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/docs/get-started

import plugin from 'tailwindcss/plugin';

// Skeleton Theme Modules
import { generateColorPalette } from './theme/colors';
// Skeleton Design Token Modules
import tokensBackgrounds from './tokens/backgrounds';
import tokensBorders from './tokens/borders';
import tokensBorderRadius from './tokens/border-radius';
import tokensFills from './tokens/fills';
import tokensText from './tokens/text';
import tokensRings from './tokens/rings';

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
