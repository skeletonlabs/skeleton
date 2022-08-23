import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import DataTable from '$lib/Table/DataTable.svelte';

export let headings: any[] = ['Foo', 'Bar'];
export let source: any[] = [
	{ foo: 'x', bar: 'y' },
	{ foo: 'x', bar: 'y' },
	{ foo: 'x', bar: 'y' }
];

describe('DataTable.svelte', () => {
	it('Renders with props', async () => {
		const { getByTestId } = render(DataTable);
		expect(getByTestId('data-table')).toBeTruthy();
	});

	it('Renders with props', async () => {
		const { getByTestId } = render(DataTable, {
			props: {
				headings,
				source
			}
		});
		expect(getByTestId('data-table')).toBeTruthy();
	});
});
