import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

// @ts-ignore
import RadioItem from '$lib/Radio/RadioItem.svelte';

const testStore = writable(0);

describe('RadioItem.svelte', () => {
	it('Renders without props', async () => {
		const { getByTestId } = render(RadioItem, {
			props: { selected: testStore }
		});
		expect(getByTestId('radio-item')).toBeTruthy();
	});

	it('Renders with props', () => {
		const { getByTestId } = render(RadioItem, {
			props: { value: 'foobar', selected: testStore }
		});
		expect(getByTestId('radio-item')).toBeTruthy();
	});
});
