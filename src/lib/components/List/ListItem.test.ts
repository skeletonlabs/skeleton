import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

import ListItem from '$lib/components/List/ListItem.svelte';

describe('ListItem.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(ListItem);
		const element: HTMLElement = getByTestId('list-row');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('LI');
	});

	// Basic List Items

	it('Renders <ul> list item', async () => {
		const { getByTestId } = render(ListItem, { props: { parentTag: 'ul' } });
		const element: HTMLElement = getByTestId('list-row');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('LI');
	});

	it('Renders <ol> list item', async () => {
		const { getByTestId } = render(ListItem, { props: { parentTag: 'ol' } });
		const element: HTMLElement = getByTestId('list-row');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('LI');
	});

	it('Renders <dl> list item', async () => {
		const { getByTestId } = render(ListItem, { props: { parentTag: 'dl' } });
		const element: HTMLElement = getByTestId('list-row');
		expect(element).toBeTruthy();
		expect(element.querySelector('dt')).toBeTruthy();
		expect(element.querySelector('dd')).toBeTruthy();
	});

	it('Renders <nav> anchor list item', async () => {
		const { getByTestId } = render(ListItem, { props: { parentTag: 'nav' } });
		const element: HTMLElement = getByTestId('list-row');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('A');
	});

	// Selecton List Items

	// TODO: we need to define the `value` prop here, not sure the syntax
	it('Renders <nav> selection list item, single value', async () => {
		const { getByTestId } = render(ListItem, {
			props: {
				parentTag: 'nav',
				selected: writable('foobar'),
				highlight: 'hover:bg-accent-500/10',
				hover: '!bg-accent-500'
			}
		});
		const element: HTMLElement = getByTestId('list-row');
		expect(element).toBeTruthy();
		expect(element.className).to.contain('!bg-accent-500');
	});
});
