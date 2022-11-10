// Data Table Utilities

import type { DataTableModel } from './types';

// Local: Search ---

function search(model: DataTableModel): any[] {
	return model.source.filter((row) => JSON.stringify(row).toLowerCase().includes(model.search));
}

// Local: Sort Handlers ---

let lastSortedKey: string = '';

function sort(model: DataTableModel): any[] {
	const sortedCurrent = model.sort !== lastSortedKey ? sortAsc(model) : sortDesc(model);
	lastSortedKey = model.sort;
	return sortedCurrent;
}

function sortAsc(model: DataTableModel): any[] {
	const key: string = model.sort;
	return model.current.sort((x, y) => (typeof x[key] === 'string' && typeof y[key] === 'string' ? String(x[key]).localeCompare(String(y[key])) : (x[key] as number) - (y[key] as number)));
}

function sortDesc(model: DataTableModel): any[] {
	const key: string = model.sort;
	return model.current.sort((x, y) => (typeof y[key] === 'string' && typeof x[key] === 'string' ? String(y[key]).localeCompare(String(x[key])) : (y[key] as number) - (x[key] as number)));
}

// Local:Selection ---

function selection(model: DataTableModel): any[] {
	return model.current.filter((row) => row.hasOwnProperty('selected') && row.selected === true);
}

// Public Methods ---

export function dataTableSelect(sourceData: any[], key: string, valuesArray: any[]): any[] {
	return sourceData.map((row: Record<string, unknown>) => {
		row.selected = valuesArray.includes(row[key]) ? true : false;
		return row;
	});
}

/** Initialize a data table by passing a DataTableModel object. */
export function dataTableCreate(model: DataTableModel): DataTableModel {
	model.current = search(model);
	model.current = sort(model);
	model.selection = selection(model);
	return model;
}
