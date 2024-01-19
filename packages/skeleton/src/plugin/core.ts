/* eslint-disable @typescript-eslint/no-var-requires */
// The Skeleton Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/docs/get-started

import plugin from 'tailwindcss/plugin.js';

// Skeleton Theme Modules
import themeColors from './extends/colors.js';
// Skeleton Design Token Modules
import tokensBackgrounds from './extends/backgrounds.js';
import tokensBorders from './extends/borders.js';
import tokensBorderRadius from './extends/border-radius.js';
import tokensFills from './extends/fills.js';
import tokensText from './extends/text.js';
import tokensRings from './extends/rings.js';

// IMPORTANT: KEEP THIS FOR `/utilities/presets.ts`
export const coreUtilities = {
	// Implement Skeleton design token classes
	...tokensBackgrounds(),
	...tokensBorders(),
	...tokensBorderRadius(),
	...tokensFills(),
	...tokensText(),
	...tokensRings()
};

export const coreConfig = {
	theme: {
		extend: {
			// Implement Skeleton theme colors
			colors: themeColors()
		}
	}
};

// export const coreClasses = getSkeletonClasses();

export function getSkeletonClasses() {
	// try/catch because it will throw when generated-classes.js isn't generated yet
	try {
		const { components, base } = require('./generated/generated-classes.cjs');

		if (typeof components !== 'object' || typeof base !== 'object') {
			console.error('Failed to load Skeleton classes');
			process.exitCode = 1;
		}

		return { components, base };
	} catch {
		console.error("generated-classes.cjs hasn't generated yet");
	}

	return { components: undefined, base: undefined };
}

export const corePlugin = plugin(({ addUtilities }) => {
	addUtilities(coreUtilities);
}, coreConfig);
