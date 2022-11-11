// Data Table Utilities

import type { DataTableModel } from './types';

// Local: Search ---

function search(model: DataTableModel): any[] {
	return model.source.filter((row) => JSON.stringify(row).toLowerCase().includes(model.search));
}

// Local: Sort Handlers ---

let lastSortedKey: string = '';

function sort(model: DataTableModel): any[] {
	if (lastSortedKey === model.sort.key) model.sort.asc = !model.sort.asc;
	const sortedCurrent = model.sort.asc === true ? sortAsc(model) : sortDesc(model);
	lastSortedKey = model.sort.key;
	return sortedCurrent;
}

function sortAsc(model: DataTableModel): any[] {
	const key: string = model.sort.key;
	return model.current.sort((x, y) => (typeof x[key] === 'string' && typeof y[key] === 'string' ? String(x[key]).localeCompare(String(y[key])) : (x[key] as number) - (y[key] as number)));
}

function sortDesc(model: DataTableModel): any[] {
	const key: string = model.sort.key;
	return model.current.sort((x, y) => (typeof y[key] === 'string' && typeof x[key] === 'string' ? String(y[key]).localeCompare(String(x[key])) : (y[key] as number) - (x[key] as number)));
}

// Local:Selection ---

function selection(model: DataTableModel): any[] {
	return model.current.filter((row) => row.hasOwnProperty('selected') && row.selected === true);
}

// Public Methods ---

/** Conditionally enable the select key for source data objects. */
export function dataTableSelect(sourceData: any[], key: string, valuesArray: any[]): any[] {
	return sourceData.map((row: Record<string, unknown>) => {
		row.selected = valuesArray.includes(row[key]) ? true : false;
		return row;
	});
}

/** Svelte Action: handle data table sort features. */
export function dataTableSort(node: HTMLElement, callback: any) {
	const classAsc: string = 'table-sort-asc';
	const classDesc: string = 'table-sort-dsc';
	let lastSortedKey: string = '';
	let sortAsc: boolean = false;

	const clearSortClasses = (): void => {
		[classAsc, classDesc].forEach((c: string) => {
			const elem = node.querySelector(`.${c}`);
			if (elem) elem.classList.remove(c);
		});
	};

	const onClick = (e: any) => {
		const elemTarget = e.target;
		const sortBy: string = elemTarget.dataset.sort;
		if (sortBy) {
			clearSortClasses();
			if (lastSortedKey === sortBy) sortAsc = !sortAsc;
			sortAsc ? elemTarget.classList.add(classDesc) : elemTarget.classList.add(classAsc);
			callback(sortBy);
		}
		lastSortedKey = sortBy;
	};

	node.addEventListener('click', onClick);

	return {
		update(newCallback: any) {
			callback = newCallback;
		},
		destroy() {
			node.removeEventListener('click', onClick);
		}
	};
}

/** xxx */
export function dataTableSelectAll(e: any, model: DataTableModel): DataTableModel {
	model.current = model.current.map((row: any) => {
		row.selected = e.target.checked;
		return row;
	});
	return model;
}

/** Initialize a data table by passing a DataTableModel object. */
export function dataTableCreate(model: DataTableModel): DataTableModel {
	model.current = search(model);
	model.current = sort(model);
	model.selection = selection(model);
	return model;
}
