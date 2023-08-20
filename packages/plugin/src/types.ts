import type { BaseTheme, PresetThemeName, ThemeProperties } from './tailwind/themes';

export type ConfigOptions = {
	/**
	 * Prefixes Skeleton component classes with a specified string.
	 *
	 * This should be used when there are Skeleton class names
	 * that conflict with other plugins. For example, our `btn` class
	 * can often conflict with other UI libraries.
	 *
	 * **NOTE:** Only use this if you're using this plugin WITHOUT
	 * our accompanying component library, `@skeletonlabs/skeleton`.
	 *
	 * @example
	 * // Skeleton classes will be prefixed with 'sk-' (e.g., sk-btn)
	 * prefix = 'sk-'
	 *
	 * @default ''
	 */
	prefix?: string;
	/**
	 * Whether to include Skeleton's base styles.
	 * @default true
	 */
	base?: boolean;
	/**
	 * Theme config for configuring your themes.
	 */
	themes?: ThemeConfig;
};

export type ThemeConfig = {
	/**
	 * Custom themes can be enabled by passing them to this option.
	 *
	 * @example
	 * custom = [
	 * 	{
	 * 		name: "my-custom-theme",
	 * 		properties: {
	 * 			'--theme-font-family-base': 'system-ui',
	 * 			'--theme-font-family-heading': "'Space Grotesk', sans-serif",
	 * 			'--theme-font-color-base': 'var(--color-primary-900)',
	 * 			'--theme-font-color-dark': 'var(--color-primary-100)',
	 * 			// ...
	 * 		},
	 * 		enhancements: { // optional
	 * 			"[data-theme='my-custom-theme'] h1": {
	 * 				fontWeight: "400"
	 * 			}
	 * 		}
	 * 	}
	 * ]
	 *
	 *
	 */
	custom?: Array<CustomThemeConfig>;
	/**
	 * Preset themes can be enabled by passing them to this option.
	 *
	 * @example
	 * // Preset themes can be enabled by simply passing their names
	 * preset = [ "skeleton", "modern", "rocket" ]
	 *
	 * @example
	 * // Or by passing an object, enabling the ability
	 * // to enable a preset's `enhancements`
	 * preset = [
	 * 	{ name: "skeleton", enhancements: true },
	 * 	{ name: "modern", enhancements: true },
	 * ]
	 *
	 */
	preset?: Array<PresetThemeConfig | PresetThemeName>;
};

export type CustomThemeConfig = {
	/**
	 * The name of your custom theme.
	 *
	 * This is the required value to activate your
	 * theme with the `data-theme` attribute in your `body` element.
	 *
	 * @example
	 * // If name = "my-custom-theme"
	 * <body data-theme="my-custom-theme">
	 */
	name: string;
	/**
	 * Define your own custom theme properties here.
	 *
	 * To generate a custom theme, visit our Theme Generator.
	 * @see https://skeleton.dev/docs/generator
	 *
	 * @example
	 * properties = {
	 * 	'--theme-font-family-base': 'system-ui',
	 * 	'--theme-font-family-heading': "'Space Grotesk', sans-serif",
	 * 	'--theme-font-color-base': 'var(--color-primary-900)',
	 * 	'--theme-font-color-dark': 'var(--color-primary-100)',
	 * 	// ...
	 * }
	 *
	 * @example
	 * // If you wish to extend one of our preset themes, you can do so
	 * // with our provided `getThemeProperties()` function.
	 * import { getThemeProperties } from "@skeletonlabs/tw-plugin";
	 *
	 * properties = {
	 * 	...getThemeProperties("skeleton"),
	 * 	'--color-primary-50': '240 228 254',
	 * 	'--color-primary-100': '235 219 253',
	 * 	'--color-primary-200': '231 210 253',
	 * 	'--color-primary-300': '216 183 251',
	 * 	'--color-primary-400': '186 130 248',
	 * 	'--color-primary-500': '157 76 245',
	 * 	'--color-primary-600': '141 68 221',
	 * 	'--color-primary-700': '118 57 184',
	 * 	'--color-primary-800': '94 46 147',
	 * 	'--color-primary-900': '77 37 120'
	 * }
	 */
	properties: ThemeProperties;
	/**
	 * Optional properties that are applied in dark mode.
	 */
	properties_dark?: Partial<ThemeProperties>;
};

export type PresetThemeConfig = {
	/**
	 * Name of one of our provided theme presets.
	 */
	name: PresetThemeName;
	/**
	 * Whether to include the preset theme enhancements. Disabled by default.
	 *
	 * This implements additional settings such as background gradients,
	 * header font weights, and more.
	 *
	 * @example
	 * // These are disabled by default, so you must enable them to opt-in
	 * skeleton({ themes: [{ name: "skeleton", enhancements: true }] })
	 *
	 * @default false
	 */
	enhancements?: boolean;
};
