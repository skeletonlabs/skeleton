import { describe, expect, it } from 'vitest';
import { transformTailwindConfigContent } from './transform-tailwind-config.js';

describe('transformTailwindConfigContent', () => {
	it('transforms imports', () => {
		const input = 'import { skeleton } from "@skeletonlabs/tw-plugin";';
		const expectedOutput = 'import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";';
		const output = transformTailwindConfigContent(input);
		expect(output).toBe(expectedOutput);
	});

	it('transforms `config.content`', () => {
		const input = `import {join} from 'path';
export default {
	content: [
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	]
}`;
		const expectedOutput = `export default {
	content: [
		contentPath(import.meta.url, 'svelte')
	]
}`;
		const output = transformTailwindConfigContent(input);
		expect(output).toBe(expectedOutput);
	});
});
