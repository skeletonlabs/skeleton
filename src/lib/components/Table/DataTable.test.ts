import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import DataTable from '$lib/components/Table/DataTable.svelte';
import { sortDesc, sortAsc } from './DataTableService';

// FIXME: SKIPPED UNTIL FIXED
describe.skip('DataTable.svelte', () => {
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

// FIXME: SKIPPED UNTIL FIXED
describe.skip('DataTableService', () => {
	const staticArr = [
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
		{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
		{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
		{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
		{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
		{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
	];
	it('will sort descending with a number', () => {
		expect(sortDesc(staticArr, 'position')[0]).toEqual({
			position: 10,
			name: 'Neon',
			weight: 20.1797,
			symbol: 'Ne'
		});
		expect(sortDesc(staticArr, 'position')[9]).toEqual({
			position: 1,
			name: 'Hydrogen',
			weight: 1.0079,
			symbol: 'H'
		});
	});

	it('will sort descending with a string', () => {
		expect(sortDesc(staticArr, 'name')[0]).toEqual({
			position: 4,
			name: 'Beryllium',
			weight: 9.0122,
			symbol: 'Be'
		});

		expect(sortDesc(staticArr, 'name')[9]).toEqual({
			position: 8,
			name: 'Oxygen',
			weight: 15.9994,
			symbol: 'O'
		});
	});

	it('will sort ascending with a number', () => {
		expect(sortAsc(staticArr, 'position')[0]).toEqual({
			position: 1,
			name: 'Hydrogen',
			weight: 1.0079,
			symbol: 'H'
		});
		expect(sortAsc(staticArr, 'position')[9]).toEqual({
			position: 10,
			name: 'Neon',
			weight: 20.1797,
			symbol: 'Ne'
		});
	});
	it('will sort ascending with a string', () => {
		expect(sortAsc(staticArr, 'name')[0]).toEqual({
			position: 8,
			name: 'Oxygen',
			weight: 15.9994,
			symbol: 'O'
		});
		expect(sortAsc(staticArr, 'name')[9]).toEqual({
			position: 4,
			name: 'Beryllium',
			weight: 9.0122,
			symbol: 'Be'
		});
	});
});
