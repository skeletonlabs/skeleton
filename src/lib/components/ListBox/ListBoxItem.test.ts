import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

import ListItem from '$lib/components/ListBox/ListBoxItem.svelte';

describe('ListItem.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(ListItem);
		const element: HTMLElement = getByTestId('listbox-item');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('LI');
	});

	// TODO: we need to define the `value` prop here, not sure the syntax
	it('Renders <nav> selection list item, single value', async () => {
		const { getByTestId } = render(ListItem, { props: { selected: writable('foobar') } });
		const element: HTMLElement = getByTestId('listbox-item');
		expect(element).toBeTruthy();
	});
});
