import { describe, expect, it } from 'vitest';
import { transformTailwindConfig } from './transform-tailwind-config.js';
import { THEME_MAPPINGS } from '../utility/theme-mappings.js';

describe('transformTailwindConfig', () => {
	it('transforms content path', () => {
		expect(
			transformTailwindConfig(`
import { join } from "path";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	]
}
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { contentPath } from "@skeletonlabs/skeleton/plugin";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		contentPath(import.meta.url, "svelte")
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms content path with at different index', () => {
		expect(
			transformTailwindConfig(`
import { join } from "path";

export default {
	content: [
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}"),
		"./src/**/*.{html,js,svelte,ts}"
	]
}
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { contentPath } from "@skeletonlabs/skeleton/plugin";

export default {
	content: [
		contentPath(import.meta.url, "svelte"),
		"./src/**/*.{html,js,svelte,ts}"
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	for (const [oldTheme, newTheme] of Object.entries(THEME_MAPPINGS)) {
		it(`transforms a config with ${oldTheme} theme`, () => {
			expect(
				transformTailwindConfig(`
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	plugins: [
		skeleton({
			themes: {
				preset: ["${oldTheme}"]
			}
		})
	],
}
		`)
					.code.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			).toBe(
				`
import { skeleton } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	plugins: [
		skeleton({
			themes: [themes.${newTheme}]
		})
	],
}
		`
					.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			);
		});
		it(`transforms a config with ${oldTheme} theme using the object theme format`, () => {
			expect(
				transformTailwindConfig(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: "${oldTheme}",
						enhancements: true
					}
				]
			}
		})
	],
}
		`)
					.code.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			).toBe(
				`
import { skeleton } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	plugins: [
		skeleton({
			themes: [themes.${newTheme}]
		})
	],
}
		`
					.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			);
		});
	}
	it('transforms a config with custom themes', () => {
		expect(
			transformTailwindConfig(`
import { skeleton } from "@skeletonlabs/tw-plugin";
import myCustomTheme from "./my-custom-theme.js";

export default {
	plugins: [
		skeleton({
			themes: {
				custom: [myCustomTheme]
			}
		})
	],
}
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
/**
 * SKELETON MIGRATION NOTICE
 *
 * The following custom themes were detected and commented out due to them not being compatible with the V3 theme format:
 *
 * - myCustomTheme
 *
 * See https://github.com/skeletonlabs/skeleton/discussions/2921 for info on how to migrate these yourself.
 */

import { skeleton } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	plugins: [
		skeleton({
			themes: [themes.cerberus /* myCustomTheme */]
		})
	],
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms a config with multiple custom themes', () => {
		expect(
			transformTailwindConfig(`
import { skeleton } from "@skeletonlabs/tw-plugin";
import myCustomTheme from "./my-custom-theme.js";
import myCustomThemeTwo from "./my-custom-theme-two.js";

export default {
	plugins: [
		skeleton({
			themes: {
				custom: [myCustomTheme, myCustomThemeTwo]
			}
		})
	],
}
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
/**
 * SKELETON MIGRATION NOTICE
 *
 * The following custom themes were detected and commented out due to them not being compatible with the V3 theme format:
 *
 * - myCustomTheme
 * - myCustomThemeTwo
 *
 * See https://github.com/skeletonlabs/skeleton/discussions/2921 for info on how to migrate these yourself.
 */

import { skeleton } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	plugins: [
		skeleton({
			themes: [themes.cerberus /* myCustomTheme, myCustomThemeTwo */]
		})
	],
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('does not add a themes import when no themes are set', () => {
		expect(
			transformTailwindConfig(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	plugins: [
		skeleton({
			themes: {}
		})
	],
}
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { skeleton } from "@skeletonlabs/skeleton/plugin";

export default {
	plugins: [
		skeleton({
			themes: []
		})
	],
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('keeps other skeleton configuration options', () => {
		expect(
			transformTailwindConfig(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	plugins: [
		skeleton({
			base: true,
			themes: {},
			prefix: "sk-"
		})
	],
}
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { skeleton } from "@skeletonlabs/skeleton/plugin";

export default {
	plugins: [
		skeleton({
			base: true,
			themes: [],
			prefix: "sk-"
		})
	],
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
});
