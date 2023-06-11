import plugin from 'tailwindcss/plugin.js';
import { coreConfig, coreUtilities, getSkeletonClasses } from './tailwind/core.js';
type ConfigOptions = {
	intellisense?: boolean;
	theme?: string;
	prefix?: string;
};

const { components, base } = getSkeletonClasses()!;

const skeleton = plugin.withOptions<ConfigOptions>(
	// Plugin Creator
	(options) => {
		return ({ addBase, addComponents, addUtilities, config }) => {
			addBase(base);
			addUtilities(coreUtilities);
			addComponents(components);
		};
	},
	// Config
	(options) => {
		return { ...coreConfig, prefix: options?.prefix };
	}
);

// consider exposing 'prefix' for users

export default skeleton;
