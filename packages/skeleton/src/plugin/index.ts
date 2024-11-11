import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import plugin from 'tailwindcss/plugin.js';
import postcssJs from 'postcss-js';
import { coreConfig, coreUtilities, getSkeletonClasses } from './core.js';
import { prefixSelector } from './prefixSelector.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';
import type { Theme } from './themes/index.js';
import type { ConfigOptions } from './types.js';

const skeleton = plugin.withOptions<ConfigOptions>(
	// Plugin Creator
	(options) => {
		return ({ addBase, addComponents, addUtilities }) => {
			const { components, base } = getSkeletonClasses();
			const baseStyles: CSSRuleObject = {};
			let componentStyles = components;

			// Base styles configuration
			if (options?.base !== false) {
				addBase(base);
			}

			// Theme configuration
			options?.themes?.forEach((theme) => {
				baseStyles[`:root [data-theme='${theme.name}']`] = theme.properties;
			});

			// Prefix component classes
			if (options?.prefix) {
				const prefix = options?.prefix;
				const root = postcssJs.parse(components);
				root.walkRules((rule) => {
					rule.selector = prefixSelector(prefix, rule.selector);
				});

				componentStyles = postcssJs.objectify(root);
			}

			addBase(baseStyles);
			addUtilities(coreUtilities);
			addComponents(componentStyles, { respectPrefix: false });
		};
	},
	// Config
	() => {
		return { ...coreConfig };
	}
);

/**
 * Assembles content glob patterns for skeleton component packages
 * @param fileURL
 * @param framework
 * @example
 * const config = {
 * 	// ...
 * 	content: [
 * 		// ...
 * 		contentPath(import.meta.url, "svelte")
 * 	]
 * }
 */
export function contentPath(fileURL: URL, framework: 'svelte' | 'react') {
	const configPath = fileURLToPath(fileURL);
	// resolve framework package path
	const require = createRequire(fileURL);
	const packageEntryPath = require.resolve(`@skeletonlabs/skeleton-${framework}`, { paths: [configPath] });
	const packagePath = path.resolve(packageEntryPath, '..');

	// assemble glob (globs use posix file seporators)
	const relative = path.relative(configPath, packagePath).split(path.sep).join('/');
	const glob = relative + fileExtensions[framework];
	return glob;
}

const fileExtensions = {
	react: '/**/*.{html,js,ts,jsx,tsx}',
	svelte: '/**/*.{html,js,ts,svelte}'
};

export { skeleton };
export type { ConfigOptions, Theme };
