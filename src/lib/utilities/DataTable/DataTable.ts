// Data Table Utilities
// A set of utility features for local template-driven data tables.

import { type Writable, get, writable } from 'svelte/store';
import type { DataTableModel, DataTableOptions } from './types';

// Exports

export * from './types';
export * from './actions';

/** Creates the writeable store for the data table */
export function createDataTableStore<T extends Record<PropertyKey, any>>(
	source: T[],
	options: DataTableOptions<T> = {}
): Writable<DataTableModel<T>> {
	// Creates a new source that also adds the `dataTableChecked` property to each row object
	const newSource = source.map((rowObj) => ({ ...rowObj, dataTableChecked: false }));
	const store = writable<DataTableModel<T>>({
		source: newSource,
		filtered: newSource,
		sortState: { lastKey: '', asc: true },
		selection: [],
		search: options.search ?? '',
		sort: options.sort ?? ''
	});

	return store;
}

// Data Table Handler
/** Listens for changes to `$dataTableModel` and triggers: search, selection, sort, and pagination. */
export function dataTableHandler<T extends Record<PropertyKey, any>>(store: DataTableModel<T>): void {
	// Then
	searchHandler(store);
	selectionHandler(store);
	sortHandler(store);
	paginationHandler(store);
}

// Utilities ---

/** A utility method for updating a select store value. */
export function dataTableStorePut<T extends Record<PropertyKey, unknown>, K extends keyof DataTableModel<T>>(
	store: Writable<DataTableModel<T>>,
	key: K,
	value: DataTableModel<T>[K]
): void {
	let newStore = get(store);
	newStore = { ...newStore, [key]: value };
	store.set(newStore);
}

// Search ---

function searchHandler<T extends Record<PropertyKey, unknown>>(store: DataTableModel<T>): void {
	store.filtered = store.source.filter((rowObj) => {
		const formattedSearchTerm = store.search?.toLowerCase() || '';
		return Object.values(rowObj).join(' ').toLowerCase().includes(formattedSearchTerm);
	});
}

// Selection ---

function selectionHandler<T extends Record<PropertyKey, unknown>>(store: DataTableModel<T>): void {
	store.selection = store.source.filter((row) => row.dataTableChecked === true); // ? should this be filtered by source or filter?
}

/** Allows you to dynamically pre-select rows on-demand. */
export function dataTableSelect<T extends Record<PropertyKey, any>, K extends keyof T>(
	store: Writable<DataTableModel<T>>,
	key: K,
	valuesArr: Array<unknown>
): void {
	get(store).filtered.map((row) => {
		if (valuesArr.includes(row[key])) row.dataTableChecked = true;
		return row;
	});
}

/** Triggered by the "select all" checkbox to toggle all row selection. */
export function dataTableSelectAll<T extends Record<PropertyKey, any>>(event: Event, store: Writable<DataTableModel<T>>): void {
	if (event.target && 'checked' in event.target && typeof event.target.checked === 'boolean') {
		const isAllChecked = event.target.checked;
		const storeFiltered = get(store).source.map((row) => {
			row.dataTableChecked = isAllChecked; // TODO: side effect, mutating source
			return row;
		});
		dataTableStorePut(store, 'filtered', storeFiltered);
	}
}

// Sort ---

/** Listens for clicks to a table heading with `data-sort` attribute. Updates `$dataTableModel.sort`. */
export function dataTableSort<T extends Record<PropertyKey, any>>(event: Event, store: Writable<DataTableModel<T>>): void {
	if (!(event.target instanceof Element)) return;
	const newSortKey: keyof T | null | '' = event.target.getAttribute('data-sort');
	const model = get(store);
	// If same key used repeated, toggle asc/dsc order
	if (newSortKey !== '' && newSortKey === model.sortState.lastKey) model.sortState.asc = !model.sortState.asc;
	// Cache the last key used
	model.sortState.lastKey = newSortKey;
	// Update store
	if (newSortKey) dataTableStorePut(store, 'sort', newSortKey);
}

function sortHandler<T extends Record<PropertyKey, unknown>>(store: DataTableModel<T>): void {
	if (!store.sort) return;
	// Sort order based on current sortState.asc value
	store.sortState.asc ? sortOrder('asc', store) : sortOrder('dsc', store);
}

function sortOrder<T extends Record<PropertyKey, unknown>>(order: string, store: DataTableModel<T>): void {
	const key = store.sort ?? '';
	store.filtered = store.source.sort((x, y) => {
		// If descending, swap x/y
		if (order === 'dsc') [x, y] = [y, x];
		// Sort logic
		if (typeof x[key] === 'string' && typeof y[key] === 'string') {
			return String(x[key]).localeCompare(String(y[key]));
		} else {
			return (x[key] as number) - (y[key] as number);
		}
	});
}

// Pagination ---

function paginationHandler<T extends Record<PropertyKey, unknown>>(store: DataTableModel<T>): void {
	if (store.pagination) {
		// Slice for Pagination
		const filtered = store.source.slice(
			store.pagination.offset * store.pagination.limit, // start
			store.pagination.offset * store.pagination.limit + store.pagination.limit // end
		);

		// filter by search if currently searching
		if (store.search !== '') {
			store.filtered = store.filtered.slice(0, store.pagination.limit);
			// Set Current Size
			store.pagination.size = store.filtered.length;
		} else {
			store.filtered = filtered;
			// Set Current Size
			store.pagination.size = store.source.length;
		}
	}
}
