import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Counter from '$lib/components/Counter/Counter.svelte';

describe('Counter.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Counter);
		expect(getByTestId('counter')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Counter, {
			props: {
				background: 'bg-surface-500',
				width: 'w-12',
				border: '',
				rounded: 'rounded-full',
				shadow: 'shadow-xl',

				values: ['test1', 'test2']
			}
		});
		expect(getByTestId('counter')).toBeTruthy();
	});

	it('Test Values are shown when provided', async () => {
		const { getByTestId } = render(Counter, { props: { values: ['test1'] } });
		const innerHTML: string = getByTestId('counter').innerHTML;
		expect(innerHTML).to.contain('test1');
	});
});
