// Data Table Utilities
// A set of utility features for local template-driven data tables.

import { type Writable, get } from 'svelte/store';
import type { DataTableModel } from './types';

export * from './types';
export * from './a11y';

// Utilities ---

export function dataTableAppend(store: Writable<DataTableModel>, key: string, value: any): void {
	let newStore: DataTableModel = get(store);
	newStore = { ...newStore, [key]: value };
	store.set(newStore);
}

// Search ---

function searchHandler(store: DataTableModel): void {
	store.filtered = store.source.filter((row) =>
		JSON.stringify(row)
			.toLowerCase()
			.includes(store.search || '')
	);
}

// Selection ---

function selectionHandler(store: DataTableModel): void {
	store.selection = store.filtered.filter((row) => row.checked === true);
}

export function dataTableSelectAll(event: any, store: Writable<DataTableModel>): void {
	const isAllChecked = event.target.checked;
	const storeFiltered = get(store).filtered.forEach((row) => (row.checked = isAllChecked));
	dataTableAppend(store, 'filtered', storeFiltered);
}

// Pagination ---

function paginationHandler(store: DataTableModel): void {
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

// Sort ---

export function dataTableSorter(event: any, store: Writable<DataTableModel>): void {
	const sortBy: string = event.target.dataset.sort;
	if (sortBy) dataTableAppend(store, 'sort', sortBy);
}

function sortHandler(store: DataTableModel): void {
	sortAsc(store); // FIXME: hardcoded
}

function sortAsc(store: DataTableModel): void {
	const key: string = store.sort;
	store.filtered.sort((x, y) => (typeof x[key] === 'string' && typeof y[key] === 'string' ? String(x[key]).localeCompare(String(y[key])) : (x[key] as number) - (y[key] as number)));
}

// FIXME: implement this asap.
// function sortDesc(store: DataTableModel): void {
// 	const key: string = store.sort;
// 	store.filtered.sort((x, y) => (typeof y[key] === 'string' && typeof x[key] === 'string' ? String(y[key]).localeCompare(String(x[key])) : (y[key] as number) - (x[key] as number)));
// }

// Action ---

export function dataTableInteraction(node: HTMLElement, args: any) {
	const classAsc: string = 'table-sort-asc';
	// Click Handler
	const onClick = (e: any): any => {
		console.log(e.target);
		// Clear asc class
		const elem = node.querySelector(`.${classAsc}`);
		if (elem) elem.classList.remove(classAsc);
		// Add asc class to data-sort target
		const sortBy: string = e.target.dataset.sort;
		if (sortBy) e.target.classList.add(classAsc);
	};
	// Events
	node.addEventListener('click', onClick);
	// Lifecycle
	return {
		update(newArgs: any) {
			args = newArgs;
		},
		destroy() {
			node.removeEventListener('click', onClick);
		}
	};
}

// Data Table Handler

export function dataTableHandler(store: DataTableModel): void {
	// console.log('dataTableHandler', store);
	searchHandler(store);
	selectionHandler(store);
	paginationHandler(store);
	sortHandler(store);
}
