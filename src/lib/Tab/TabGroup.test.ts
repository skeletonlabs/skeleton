import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

// @ts-ignore
import TabGroup from '$lib/Tab/TabGroup.svelte';

describe('TabGroup.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(TabGroup, { props: { selected: writable(0) } });
		expect(getByTestId('tab-group')).toBeTruthy();
	});

	it('Renders with minimal props', async () => {
		const { getByTestId } = render(TabGroup, {
			props: {
				selected: writable(0),
				justify: 'justify-start',
				border: 'border-primary-500',
				fill: 'fill-primary-500',
				color: 'text-primary-500',
				labeledby: 'testTabGroupLabel1',
				label: 'testTabGroup1'
			}
		});
		expect(getByTestId('tab-group')).toBeTruthy();
	});
});
