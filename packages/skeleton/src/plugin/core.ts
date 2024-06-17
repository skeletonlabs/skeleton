/* eslint-disable @typescript-eslint/no-var-requires */
// The Skeleton Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/docs/get-started

import plugin from 'tailwindcss/plugin.js';

// Utilities
import utilColorPairings from './utilities/color-pairings.js';
import utilTypography from './utilities/typography.js';
import utilPresets from './utilities/presets.js';
// Extends
import extendAnimations from './extends/animations.js';
import extendBackgrounds from './extends/backgrounds.js';
import extendBorders from './extends/borders.js';
import extendColors from './extends/colors.js';
import extendSpacing from './extends/spacing.js';

export const coreUtilities = {
	...utilColorPairings(),
	...utilTypography(),
	...utilPresets()
};

export const coreConfig = {
	theme: {
		extend: {
			...extendAnimations(),
			...extendBackgrounds(),
			...extendBorders(),
			...extendColors(),
			...extendSpacing()
		}
	}
};

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
