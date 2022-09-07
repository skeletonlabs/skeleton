import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Paginator from '$lib/Paginator/Paginator.svelte';

describe('Paginator.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Paginator);
		expect(getByTestId('paginator')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Paginator, {
			props: {
				offset: 1,
				limit: 50,
				size: 100,
				amounts: [1, 5, 10, 50, 100],
				// ---
				justify: 'justify-between',
				text: 'text-xs',
				select: 'bg-primary-500',
				// ---
				variant: 'ghost-primary',
				rounded: 'rounded'
			}
		});
		expect(getByTestId('paginator')).toBeTruthy();
	});
});
