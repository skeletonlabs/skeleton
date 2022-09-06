import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Card from '$lib/Card/Card.svelte';

describe('Card.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Card);
		expect(getByTestId('card')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Card, {
			props: {
				background: 'bg-primary-500',
				color: 'text-white'
			}
		});
		expect(getByTestId('card')).toBeTruthy();
	});
});
