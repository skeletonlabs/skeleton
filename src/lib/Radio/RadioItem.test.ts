import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

// @ts-ignore
import RadioItem from '$lib/Radio/RadioItem.svelte';

describe('RadioItem.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(RadioItem, {
			props: { selected: writable(0) }
		});
		expect(getByTestId('radio-item')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(RadioItem, {
			props: {
				value: 'foobar',
				selected: writable(0),
				background: 'bg-primary-500',
				color: 'text-white',
				label: 'testRadioItem1'
			}
		});
		expect(getByTestId('radio-item')).toBeTruthy();
	});
});
