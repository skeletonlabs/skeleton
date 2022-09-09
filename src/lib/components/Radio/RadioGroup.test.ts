import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';

describe('RadioGroup.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(RadioGroup, {
			props: {
				selected: writable(0)
			}
		});
		expect(getByTestId('radio-group')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(RadioGroup, {
			props: {
				selected: writable(0),
				background: 'bg-warning-500',
				color: 'text-white',
				width: 'w-auto'
			}
		});
		expect(getByTestId('radio-group')).toBeTruthy();
	});
});
