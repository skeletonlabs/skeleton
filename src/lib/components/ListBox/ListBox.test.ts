import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

import ListBox from '$lib/components/ListBox/ListBox.svelte';

describe('ListBox.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(ListBox);
		expect(getByTestId('listbox')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(ListBox, {
			props: {
				selected: writable('foobar'),
				space: 'space-y-1',
				height: 'h-auto',
				// Props (Item)
				accent: '!bg-primary-500', // '!' recommended
				padding: 'px-4 py-3',
				rounded: 'rounded',
				// Props (regions)
				regionLabel: 'bg-red-500',
				regionList: 'bg-green-500',
				// Props (a11y)
				label: 'testList1',
				labelId: 'testListId1'
			}
		});
		expect(getByTestId('listbox')).toBeTruthy();
	});

	it('Renders listbox, single value', async () => {
		const { getByTestId } = render(ListBox, { props: { tag: 'nav', selected: writable('foobar') } });
		const element = getByTestId('listbox');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('DIV');
	});

	it('Renders listbox, multiple values', async () => {
		const { getByTestId } = render(ListBox, { props: { tag: 'nav', selected: writable(['foo', 'bar']) } });
		const element = getByTestId('listbox');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('DIV');
	});
});
