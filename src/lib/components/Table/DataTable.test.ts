import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import DataTable from '$lib/components/Table/DataTable.svelte';

describe('DataTable.svelte', () => {
	it('Renders with all props', async () => {
		const { getByTestId } = render(DataTable);
		expect(getByTestId('data-table')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(DataTable, {
			props: {
				headings: ['Foo', 'Bar'],
				source: [
					{ foo: 'x', bar: 'y' },
					{ foo: 'x', bar: 'y' },
					{ foo: 'x', bar: 'y' }
				],
				search: '',
				sort: '',
				count: 3,
				interactive: false,
				async: false,
				// ---
				header: 'bg-surface-50 dark:bg-surface-700',
				body: 'bg-surface-200 dark:bg-surface-800',
				text: 'text-sm',
				hover: 'hover:bg-primary-500/10',
				// ---
				labelledby: 'testDataTableLabel1',
				describedby: 'testDataTablDescribed1'
			}
		});
		expect(getByTestId('data-table')).toBeTruthy();
	});
});
