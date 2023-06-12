import plugin from 'tailwindcss/plugin.js';
import { coreConfig, coreUtilities, getSkeletonClasses } from './tailwind/core.js';

type ConfigOptions = {
	/**
	 * Prefix Skeleton component classes with a specified string. Ideally used when
	 * there are Skeleton class names that conflict with other plugins.
	 * @example
	 * // Skeleton classes will be prefixed with 'sk-' (ex: sk-btn)
	 * prefix = 'sk-'
	 * @default ''
	 */
	prefix?: string;
	important?: boolean;
	/**
	 * Whether to include Skeleton's base styles.
	 * @default true
	 */
	base?: boolean;
};

const skeleton = plugin.withOptions<ConfigOptions>(
	// Plugin Creator
	(options) => {
		return ({ addBase, addComponents, addUtilities, config }) => {
			const { components, base } = getSkeletonClasses();

			if (options?.base !== false) addBase(base);

			addUtilities(coreUtilities);
			addComponents(components);
		};
	},
	// Config
	(options) => {
		return { ...coreConfig, prefix: options?.prefix, important: options?.important };
	}
);

export default skeleton;
