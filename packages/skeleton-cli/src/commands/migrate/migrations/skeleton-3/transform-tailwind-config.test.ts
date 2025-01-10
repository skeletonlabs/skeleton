import { describe, expect, it } from 'vitest';
import { transformTailwindConfigContent } from './transform-tailwind-config.js';

describe('transformTailwindConfigContent', () => {
	it('transforms imports', () => {
		const input = `
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
`.trim();
		const expectedOutput = `
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';
`.trim();
		const output = transformTailwindConfigContent(input);
		expect(output).toBe(expectedOutput);
	});

	it('transforms content paths', () => {
		const input = `
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	content: [
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	]
}
`.trim();
		const expectedOutput = `
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';

export default {
	content: [
		contentPath(import.meta.url, 'svelte')
	]
}
`.trim();
		const output = transformTailwindConfigContent(input);
		expect(output).toBe(expectedOutput);
	});
});
