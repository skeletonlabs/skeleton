import { describe, expect, it } from 'vitest';
import { transformTailwindConfigContent } from './transform-tailwind-config.js';

describe('transformTailwindConfigContent', () => {
	it('transforms a config', () => {
		const input = `
import {join} from "path";
import {skeleton} from "@skeletonlabs/tw-plugin";
export default {
content: ["./src/**/*.{html,js,svelte,ts}", join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")],
plugins: [skeleton({ themes: { preset: ["skeleton"] } })]
}
`.trim();

		const output = `
import {skeleton, contentPath} from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";
export default {
content: ["./src/**/*.{html,js,svelte,ts}", contentPath(import.meta.url, "svelte")],
plugins: [skeleton({ themes: [themes.legacy] })]
}
`.trim();
		expect(transformTailwindConfigContent(input)).toBe(output);
	});
	it('transforms a config with alternative content ordering', () => {
		const input = `
import {join} from "path";
import {skeleton} from "@skeletonlabs/tw-plugin";
export default {
content: [join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}"), "./src/**/*.{html,js,svelte,ts}"],
plugins: [skeleton({ themes: { preset: ["skeleton"] } })]
}
`.trim();

		const output = `
import {skeleton, contentPath} from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";
export default {
content: [contentPath(import.meta.url, "svelte"), "./src/**/*.{html,js,svelte,ts}"],
plugins: [skeleton({ themes: [themes.legacy] })]
}
`.trim();
		expect(transformTailwindConfigContent(input)).toBe(output);
	});
	it('transforms a config with alternative preset notation', () => {
		const input = `
import {join} from "path";
import {skeleton} from "@skeletonlabs/tw-plugin";
export default {
content: ["./src/**/*.{html,js,svelte,ts}", join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")],
plugins: [skeleton({ themes: { preset: [{ name: "skeleton", enhancements: true }] } })]
}
`.trim();

		const output = `
import {skeleton, contentPath} from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";
export default {
content: ["./src/**/*.{html,js,svelte,ts}", contentPath(import.meta.url, "svelte")],
plugins: [skeleton({ themes: [themes.legacy] })]
}
`.trim();
		expect(transformTailwindConfigContent(input)).toBe(output);
	});
	it('transforms a config with custom themes', () => {
		const input = `
import {join} from "path";
import {customTheme} from "custom-theme";
import {skeleton} from "@skeletonlabs/tw-plugin";
export default {
content: ["./src/**/*.{html,js,svelte,ts}", join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")],
plugins: [skeleton({ themes: { custom: [customTheme] } })]
}
`.trim();

		const output = `
import {customTheme} from "custom-theme";
import {skeleton, contentPath} from "@skeletonlabs/skeleton/plugin";
export default {
content: ["./src/**/*.{html,js,svelte,ts}", contentPath(import.meta.url, "svelte")],
plugins: [skeleton({ themes: [] })]
}
`.trim();
		expect(transformTailwindConfigContent(input)).toBe(output);
	});
	it('transforms a config while preserving other plugin options', () => {
		const input = `
import {join} from "path";
import {skeleton} from "@skeletonlabs/tw-plugin";
export default {
content: ["./src/**/*.{html,js,svelte,ts}", join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")],
plugins: [skeleton({ base: true, themes: { preset: ["skeleton"] }, prefix: "sk-" })]
}
`.trim();

		const output = `
import {skeleton, contentPath} from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";
export default {
content: ["./src/**/*.{html,js,svelte,ts}", contentPath(import.meta.url, "svelte")],
plugins: [skeleton({ base: true, themes: [themes.legacy], prefix: "sk-" })]
}
`.trim();
		expect(transformTailwindConfigContent(input)).toBe(output);
	});
});
