/* eslint-disable @typescript-eslint/no-var-requires */
// The Skeleton Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/docs/get-started

import plugin from 'tailwindcss/plugin.js';

// Skeleton - Tailwind Utilities
import colorPairings from './utilities/color-pairings.js';
import typography from './utilities/typography.js';

// Skeleton - Tailwind Replacements
import spacing from './replaces/spacing.js';

// Skeleton - Tailwind Extensions
import colors from './extends/colors.js';

// Skeleton Design Token Modules
// import tokensBorders from './extends/borders.js';
// import tokensBorderRadius from './extends/border-radius.js';
// import tokensFills from './extends/fills.js';
// import tokensText from './extends/text.js';
// import tokensRings from './extends/rings.js';

// Inject Skeleton utility classes
export const coreUtilities = {
	// ...tokensBorders(),
	// ...tokensBorderRadius(),
	// ...tokensFills(),
	// ...tokensText(),
	// ...tokensRings()

	// Newly added:
	...colorPairings(),
	...typography()
	// ...presets()
};

// console.log(coreUtilities);

// Extends the Tailwind Config with Skeleton features
export const coreConfig = {
	theme: {
		// Replace
		spacing: spacing(),
		// Extend
		extend: {
			colors: colors()
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
