import { describe, expect, it } from 'vitest';
import { transformTailwindConfigContent } from './transform-tailwind-config.js';

describe('transformTailwindConfigContent', () => {
	it('transforms config', () => {
		const input = `
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
`.trim();

		const output = `
import { join } from "path";
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
`.trim();
		expect(transformTailwindConfigContent(input)).toBe(output);
	});
});
