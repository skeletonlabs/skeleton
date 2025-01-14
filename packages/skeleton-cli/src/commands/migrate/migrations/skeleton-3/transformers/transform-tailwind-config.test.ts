import { describe, expect, it } from 'vitest';
import { transformTailwindConfig } from './transform-tailwind-config.js';

describe('transformTailwindConfig', () => {
	it('transforms a config', () => {
		expect(
			transformTailwindConfig(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	plugins: [
		skeleton({
			themes: {
				preset: ["skeleton"]
			}
		})
	]
}
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		contentPath(import.meta.url, "svelte")
	],
	plugins: [
		skeleton({
			themes: [themes.legacy]
		})
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms a config with alternative content ordering', () => {
		expect(
			transformTailwindConfig(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	content: [
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}"),
		"./src/**/*.{html,js,svelte,ts}"
	],
	plugins: [
		skeleton({
			themes: {
				preset: ["skeleton"]
			}
		})
	]
}
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	content: [
		contentPath(import.meta.url, "svelte"),
		"./src/**/*.{html,js,svelte,ts}"
	],
	plugins: [
		skeleton({
			themes: [themes.legacy]
		})
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms a config with alternative preset notation', () => {
		expect(
			transformTailwindConfig(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	plugins: [
		skeleton({
			themes: {
				preset: [{ name: "skeleton", enhancements: true }]
			}
		})
	]
}
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		contentPath(import.meta.url, "svelte")
	],
	plugins: [
		skeleton({
			themes: [themes.legacy]
		})
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms a config with custom themes', () => {
		expect(
			transformTailwindConfig(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	plugins: [
		skeleton({
			themes: {
				custom: [myCustomTheme]
			}
		})
	]
}
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
/**
 * SKELETON MIGRATION NOTICE
 *
 * Custom themes were detected and commented out due to them not being compatible with the V3 theme format.
 * See https://github.com/skeletonlabs/skeleton/discussions/2921 for info on how to migrate these yourself.
 */

import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		contentPath(import.meta.url, "svelte")
	],
	plugins: [
		skeleton({
			themes: [/* myCustomTheme */, themes.cerberus]
		})
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});

	it('transforms a config while preserving other plugin options', () => {
		expect(
			transformTailwindConfig(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	plugins: [
		skeleton({
			base: true,
			themes: {
				preset: ["skeleton"]
			},
			prefix: "sk-"
		})
	]
}
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		contentPath(import.meta.url, "svelte")
	],
	plugins: [
		skeleton({
			base: true,
			themes: [themes.legacy],
			prefix: "sk-"
		})
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
});
