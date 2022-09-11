import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

import RadioItem from '$lib/components/Radio/RadioItem.svelte';

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
				hover: 'hover:bg-primary-500/10',
				accent: 'bg-primary-500 !text-white',
				color: 'text-white',
				fill: 'fill-white',
				rounded: 'rounded',
				// A11y
				label: 'testRadioItem'
			}
		});
		expect(getByTestId('radio-item')).toBeTruthy();
	});
});
