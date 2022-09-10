import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Card from '$lib/components/Card/Card.svelte';

describe('Card.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Card);
		expect(getByTestId('card')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Card, {
			props: {
				background: 'bg-surface-200 dark:bg-surface-800',
				color: 'text-white',
				padding: 'p-4',
				space: 'space-y-4',
				ringSize: 'ring-[1px]',
				ringColor: 'ring-black/5 dark:ring-white/5',
				ringInset: 'ring-inset',
				rounded: 'rounded-lg',
				// Props (slots)
				slotHeader: 'bg-red-500',
				slotBody: 'bg-green-500',
				slotFooter: 'bg-blue-500'
			}
		});
		expect(getByTestId('card')).toBeTruthy();
	});
});
