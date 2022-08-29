import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

// @ts-ignore
import Tab from '$lib/Tab/Tab.svelte';

describe('Tab.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Tab, { props: { value: 'test' } });
		expect(getByTestId('tab')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Tab, {
			props: {
				selected: writable(0),
				border: 'border-primary-500',
				fill: 'fill-primary-500',
				color: 'text-primary-500',
			}
		});
		expect(getByTestId('tab')).toBeTruthy();
	});
});
