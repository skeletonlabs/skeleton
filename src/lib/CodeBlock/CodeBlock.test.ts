import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

describe('CodeBlock.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(CodeBlock, {
			props: {
				language: 'html',
				code: '<p>Hello World</p>'
			}
		});
		expect(getByTestId('codeblock')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(CodeBlock, {
			props: {
				language: 'js',
				code: `console.log('Hello World');`,
				background: 'bg-slate-800',
			}
		});
		expect(getByTestId('codeblock')).toBeTruthy();
	});
});
