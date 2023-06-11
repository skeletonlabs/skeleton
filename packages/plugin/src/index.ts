import plugin from 'tailwindcss/plugin.js';
import { coreConfig, coreUtilities, getSkeletonClasses } from './tailwind/core.js';
type Options = {
	intellisense: boolean;
	theme: string;
};

const { components, base } = getSkeletonClasses()!;

export const skeleton = plugin.withOptions<Options>(
	// Plugin Creator
	(options) => {
		return ({ addBase, addComponents, addUtilities, theme, config }) => {
			addBase(base);
			addUtilities(coreUtilities);
			addComponents(components, {
				respectImportant: true,
				respectPrefix: true
			});
		};
	},
	// Config
	(options) => {
		return { ...coreConfig };
	}
);

// consider exposing 'prefix' for users
