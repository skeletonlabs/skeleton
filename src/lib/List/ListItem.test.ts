import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import ListItem from '$lib/List/ListItem.svelte';

describe('ListItem.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(ListItem);
		expect(getByTestId('list-row')).toBeTruthy();
	});

	// NOTE: no props available
});
