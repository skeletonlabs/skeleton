import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';

describe('ListBoxItem.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(ListBoxItem, {
			props: {
				group: 'testGroup',
				name: 'testName',
				value: 'testValue'
			}
		});
		const element: HTMLElement = getByTestId('listbox-item');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('DIV');
	});

	// TODO: we need to define the `value` prop here, not sure the syntax
	it('Renders <nav> selection list item, single value', async () => {
		const { getByTestId } = render(ListBoxItem, {
			props: {
				group: 'testGroup',
				name: 'testName',
				value: 'testValue'
			}
		});
		const element: HTMLElement = getByTestId('listbox-item');
		expect(element).toBeTruthy();
	});
});
