// Data Table Utilities
// A set of utility features for local template-driven data tables.

import { type Writable, get } from 'svelte/store';
import type { DataTableModel } from './types';

// Exports

export * from './types';
export * from './actions';

// Data Table Handler

/** Listens for changes to `$dataTableModel` and triggers: search, selection, sort, and pagination. */
export function dataTableHandler(store: DataTableModel): void {
	// Reset
	store.filtered = store.source;
	// Then
	searchHandler(store);
	selectionHandler(store);
	sortHandler(store);
	paginationHandler(store);
}

// Utilities ---

/** A utility method for updating a select store value. */
export function dataTableStorePut(store: Writable<DataTableModel>, key: string, value: unknown): void {
	let newStore: DataTableModel = get(store);
	newStore = { ...newStore, [key]: value };
	store.set(newStore);
}

// Search ---

function searchHandler(store: DataTableModel): void {
	store.filtered = store.filtered.filter((rowObj) => {
		const rowValues = Object.values(rowObj).join(' ');
		const result = JSON.stringify(rowValues)
			.toLowerCase()
			.includes(store.search?.toLowerCase() || '');
		return result;
	});
}

// Selection ---

function selectionHandler(store: DataTableModel): void {
	store.selection = store.filtered.filter((row) => row.dataTableChecked === true);
}

/** Allows you to dynamically pre-select rows on-demand. */
export function dataTableSelect(store: Writable<DataTableModel>, key: string, valuesArr: any): void {
	get(store).filtered.map((row) => {
		if (valuesArr.includes(row[key])) row.dataTableChecked = true;
		return row;
	});
}

/** Triggered by the "select all" checkbox to toggle all row selection. */
export function dataTableSelectAll(event: any, store: Writable<DataTableModel>): void {
	const isAllChecked = event.target.checked;
	const storeFiltered = get(store).source.forEach((row) => (row.dataTableChecked = isAllChecked));
	dataTableStorePut(store, 'filtered', storeFiltered);
}

// Sort ---

const sortState: Record<string, string | boolean> = { lastKey: '', asc: true };

/** Listens for clicks to a table heading with `data-sort` attribute. Updates `$dataTableModel.sort`. */
export function dataTableSort(event: any, store: Writable<DataTableModel>): void {
	if (!(event.target instanceof Element)) return;
	const newSortKey = event.target.getAttribute('data-sort');
	// If same key used repeated, toggle asc/dsc order
	if (newSortKey !== '' && newSortKey === sortState.lastKey) sortState.asc = !sortState.asc;
	// Cache the last key used
	sortState.lastKey = newSortKey;
	// Update store
	if (newSortKey) dataTableStorePut(store, 'sort', newSortKey);
}

function sortHandler(store: DataTableModel): void {
	if (!store.sort) return;
	// Sort order based on current sortState.asc value
	sortState.asc ? sortOrder('asc', store) : sortOrder('dsc', store);
}

function sortOrder(order: string, store: DataTableModel): void {
	const key: string = store.sort;
	store.filtered.sort((x, y) => {
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

function paginationHandler(store: DataTableModel): void {
	// store.sort = ''; // reset
	if (store.pagination) {
		// Slice for Pagination
		store.filtered = store.filtered.slice(
			store.pagination.offset * store.pagination.limit, // start
			store.pagination.offset * store.pagination.limit + store.pagination.limit // end
		);
		// Set Current Size
		store.pagination.size = store.source.length;
	}
}
