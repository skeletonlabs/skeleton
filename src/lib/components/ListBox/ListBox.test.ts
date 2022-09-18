import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

import List from '$lib/components/ListBox/ListBox.svelte';

describe('List.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(List);
		expect(getByTestId('list-group')).toBeTruthy();
	});

	it('Renders with a11y props - static', async () => {
		const { getByTestId } = render(List, {
			props: {
				tag: 'ul',
				title: 'testTitle1',
				label: 'testList1',
				labelledby: 'testLabel1'
			}
		});
		expect(getByTestId('list-group')).toBeTruthy();
	});

	// Basic Lists

	it('Renders <ul> list', async () => {
		const { getByTestId } = render(List, { props: { tag: 'ul' } });
		const element = getByTestId('list-group');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('UL');
	});

	it('Renders <ol> list', async () => {
		const { getByTestId } = render(List, { props: { tag: 'ol' } });
		const element = getByTestId('list-group');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('OL');
	});

	it('Renders <dl> list', async () => {
		const { getByTestId } = render(List, { props: { tag: 'dl' } });
		const element = getByTestId('list-group');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('DL');
	});

	it('Renders <nav> anchor list', async () => {
		const { getByTestId } = render(List, { props: { tag: 'nav' } });
		const element = getByTestId('list-group');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('NAV');
	});

	// Selection Lists

	it('Renders <nav> selection list, single value', async () => {
		const { getByTestId } = render(List, { props: { tag: 'nav', selected: writable('foobar') } });
		const element = getByTestId('list-group');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('NAV');
	});

	it('Renders <nav> selection list, multiple values', async () => {
		const { getByTestId } = render(List, { props: { tag: 'nav', selected: writable(['foo', 'bar']) } });
		const element = getByTestId('list-group');
		expect(element).toBeTruthy();
		expect(element.tagName).eq('NAV');
	});
});
