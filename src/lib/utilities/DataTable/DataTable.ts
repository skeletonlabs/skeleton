// Data Table Utilities
// A set of utility features for local template-driven data tables.

import { type Writable, get } from 'svelte/store';
import type { DataTableModel } from './types';

export * from './types';

// Data Table Handler

/** Listens for changes to `$dataTableModel` and triggers: search, selection, sort, and pagination. */
export function dataTableHandler(store: DataTableModel): void {
	// console.log('dataTableHandler', store);
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
	store.filtered = store.source.filter((row) =>
		JSON.stringify(row)
			.toLowerCase()
			.includes(store.search?.toLowerCase() || '')
	);
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

// Pagination ---

function paginationHandler(store: DataTableModel): void {
	store.sort = ''; // reset
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

const sortState: Record<string, string | boolean> = { lastKey: '', asc: true };

/** Listens for clicks to a table heading with `data-sort` attribute. Updates `$dataTableModel.sort`. */
export function dataTableSort(event: any, store: Writable<DataTableModel>): void {
	if (!(event.target instanceof Element)) return;
	const newSortKey = event.target.getAttribute('data-sort');
	if (newSortKey) dataTableStorePut(store, 'sort', newSortKey);
}

function sortHandler(store: DataTableModel): void {
	if (!store.sort) return;
	// If same key used repeated, toggle asc/dsc order
	sortState.asc = store.sort === sortState.lastKey ? !sortState.asc : true;
	// Sort order based on current sortState.asc value
	sortState.asc ? sortOrder('asc', store) : sortOrder('dsc', store);
	// Cache the last key used
	sortState.lastKey = store.sort;
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

// Actions ---

/** Svelte Action for applying sort asc/dsc classes. */
export function dataTableInteraction(node: HTMLElement) {
	const classAsc: string = 'table-sort-asc';
	const classDsc: string = 'table-sort-dsc';
	// Click Handler
	const onClick = (e: any) => {
		if (!(e.target instanceof Element)) return;
		// Clear asc class
		const elemAsc = node.querySelector(`.${classAsc}`);
		if (elemAsc) elemAsc.classList.remove(classAsc);
		// Clear dsc class
		const elemDsc = node.querySelector(`.${classDsc}`);
		if (elemDsc) elemDsc.classList.remove(classDsc);
		// Add asc class to data-sort target
		if (e.target.getAttribute('data-sort')) {
			const classToApply = sortState.asc ? classAsc : classDsc;
			e.target.classList.add(classToApply);
		}
	};
	// Events
	node.addEventListener('click', onClick);
	// Lifecycle
	return {
		destroy() {
			node.removeEventListener('click', onClick);
		}
	};
}

/** Svelte Action for handling table a11y keyboard interactions. */
export function tableA11y(node: HTMLElement) {
	const keyWhitelist: string[] = ['ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'Home', 'End'];
	// on:keydown
	const onKeyDown = (event: KeyboardEvent) => {
		// console.log('keydown triggered');
		if (keyWhitelist.includes(event.code)) {
			event.preventDefault();
			// prettier-ignore
			switch (event.code) {
				case 'ArrowUp': a11ySetActiveCell(node, 0, -1); break;
				case 'ArrowDown': a11ySetActiveCell(node, 0, 1); break;
				case 'ArrowLeft': a11ySetActiveCell(node, -1, 0); break;
				case 'ArrowRight': a11ySetActiveCell(node, 1, 0); break;
				case 'Home': a11yJumpToOuterColumn(node, 'first'); break;
				case 'End': a11yJumpToOuterColumn(node, 'last'); break;
				default: break;
			}
		}
	};
	// Event Listner
	node.addEventListener('keydown', onKeyDown);
	// Lifecycle
	return {
		destroy() {
			node.removeEventListener('keydown', onKeyDown);
		}
	};
}

function a11ySetActiveCell(node: HTMLElement, x: number, y: number): void {
	// Focused Element
	const focusedElem = document.activeElement;
	if (!focusedElem || !focusedElem.parentElement || !focusedElem.parentElement.ariaRowIndex || !focusedElem.ariaColIndex) return;
	const focusedElemRowIndex = parseInt(focusedElem.parentElement.ariaRowIndex);
	const focusedElemColIndex = parseInt(focusedElem.ariaColIndex);
	// Target Element
	const targetRowElement = node.querySelector(`[aria-rowindex="${focusedElemRowIndex + y}"]`);
	if (targetRowElement !== null) {
		const targetColElement: HTMLElement | null = targetRowElement.querySelector(`[aria-colindex="${focusedElemColIndex + x}"]`);
		if (targetColElement !== null) targetColElement.focus();
	}
}
function a11yGetTargetElem(node: HTMLElement): HTMLElement | null {
	// Focused Element
	const focusedElem = document.activeElement;
	if (!focusedElem || !focusedElem.parentElement || !focusedElem.parentElement.ariaRowIndex) return null;
	const focusedElemRowIndex = parseInt(focusedElem.parentElement.ariaRowIndex);
	// Return Target Element
	return node.querySelector(`[aria-rowindex="${focusedElemRowIndex}"]`);
}

function a11yJumpToOuterColumn(node: HTMLElement, type: 'first' | 'last' = 'first'): void {
	const targetRowElement = a11yGetTargetElem(node);
	if (targetRowElement === null) return;
	const lastIndex = targetRowElement.children.length;
	const selected = type === 'first' ? 1 : lastIndex;
	const targetColElement: HTMLElement | null = targetRowElement.querySelector(`[aria-colindex="${selected}"]`);
	if (targetColElement === null) return;
	targetColElement.focus();
}
