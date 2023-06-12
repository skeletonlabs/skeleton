import plugin from 'tailwindcss/plugin.js';
import { coreConfig, coreUtilities, getSkeletonClasses } from './tailwind/core.js';
import { type PresetThemes, themes, type ThemeProperties } from './tailwind/themes/index.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

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
	/**
	 * Customizable themes
	 */
	themes?: Array<PresetTheme | CustomTheme | PresetThemes>;
};

export type CustomTheme = { name: string; properties: ThemeProperties; extras?: CSSRuleObject };

type PresetTheme = {
	/**
	 * Name of the theme preset.
	 */
	name: PresetThemes;
	/**
	 * Whether to include the preset extras. This implements additional
	 * settings such as background gradients, header font weights, and more.
	 * @default false
	 */
	extras?: boolean;
};

const skeleton = plugin.withOptions<ConfigOptions>(
	// Plugin Creator
	(options) => {
		return ({ addBase, addComponents, addUtilities }) => {
			const { components, base } = getSkeletonClasses();
			let baseStyles: CSSRuleObject = {};

			// Base styles configuration
			if (options?.base !== false) {
				baseStyles = { ...base };
			}

			// Theme configuration
			options?.themes?.forEach((theme) => {
				// it's a preset theme but just the name was passed in
				if (typeof theme === 'string') {
					const themeName = theme;
					// we only want the properties
					baseStyles[`:root [data-theme='${themeName}']`] = themes[themeName].properties;
					return;
				}

				// it's a preset theme
				if (!('properties' in theme)) {
					baseStyles[`:root [data-theme='${theme.name}']`] = themes[theme.name].properties;

					if (theme.extras === true) {
						// extras are opt-in
						baseStyles = { ...baseStyles, ...themes[theme.name].extras };
					}
					return;
				}

				// it's a custom theme
				baseStyles[`:root [data-theme='${theme.name}']`] = theme.properties;
				baseStyles = { ...baseStyles, ...theme.extras };
			});

			addBase(baseStyles);
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
