import type { Theme } from './themes/index.js';

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
	 *
	 * @example
	 * import * as themes from "@skeletonlabs/skeleton/themes";
	 * import myCustomTheme from "./custom-theme.js"
	 *
	 * skeleton({ themes: [myCustomTheme, themes.cerberus, themes.pine] })
	 */
	themes?: Array<Theme>;
};
