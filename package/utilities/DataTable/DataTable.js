// Data Table Utilities
// A set of utility features for local template-driven data tables.
import { writable } from 'svelte/store';
// Exports
export * from './types';
export * from './actions';
/** Creates the writeable store for the data table */
export function createDataTableStore(source, options = {}) {
    // Creates a new source that also adds the `dataTableChecked` property to each row object
    const modifiedList = source.map((rowObj) => ({ ...rowObj, dataTableChecked: false }));
    // Generate the writable
    const { subscribe, set, update } = writable({
        source,
        base: modifiedList,
        filtered: modifiedList,
        sortState: { lastKey: '', asc: true },
        selection: [],
        search: options.search ?? '',
        sort: options.sort ?? '',
        pagination: options.pagination
    });
    return {
        subscribe,
        set,
        /** Sets a new data source while maintaining the state of the original source */
        updateSource: (data) => update((model) => {
            model.source = data;
            model.base = data.map((row, i) => {
                return { ...row, dataTableChecked: model.base[i]?.dataTableChecked ?? false };
            });
            return { ...model, filtered: model.base };
        }),
        /** Triggered by the "select all" checkbox to toggle all row selection. */
        selectAll: (checked) => {
            update((model) => {
                // checks/unchecks all of the rows
                model.base.forEach((row) => {
                    row.dataTableChecked = checked;
                    return row;
                });
                return model;
            });
        },
        /** Allows you to dynamically pre-select rows on-demand. */
        select: (key, valuesArr) => {
            update((model) => {
                model.filtered.map((row) => {
                    if (valuesArr.includes(row[key]))
                        row.dataTableChecked = true;
                    return row;
                });
                return model;
            });
        },
        /** Listens for clicks to a table heading with `data-sort` attribute. Updates `$dataTableModel.sort`. */
        sort: (event) => {
            update((model) => {
                if (!(event.target instanceof Element))
                    return model;
                const newSortKey = event.target.getAttribute('data-sort');
                // If same key used repeated, toggle asc/dsc order
                if (newSortKey !== '' && newSortKey === model.sortState.lastKey)
                    model.sortState.asc = !model.sortState.asc;
                // Cache the last key used
                model.sortState.lastKey = newSortKey;
                // Update sort key
                model.sort = newSortKey ?? '';
                return model;
            });
        }
    };
}
// Data Table Handler
/** Listens for changes to `$dataTableModel` and triggers: search, selection, sort, and pagination. */
export function dataTableHandler(model) {
    searchHandler(model);
    selectionHandler(model);
    sortHandler(model);
    paginationHandler(model);
}
// Search ---
function searchHandler(store) {
    store.filtered = store.base.filter((rowObj) => {
        const formattedSearchTerm = store.search?.toLowerCase() || '';
        return Object.values(rowObj).join(' ').toLowerCase().includes(formattedSearchTerm);
    });
}
// Selection ---
function selectionHandler(store) {
    store.selection = store.base.filter((row) => row.dataTableChecked === true); // ? should this be filtered by source or filter?
}
// Sort ---
function sortHandler(store) {
    if (!store.sort)
        return;
    // Sort order based on current sortState.asc value
    store.sortState.asc ? sortOrder('asc', store) : sortOrder('dsc', store);
}
function sortOrder(order, store) {
    const key = store.sort;
    store.filtered = store.base.sort((x, y) => {
        // If descending, swap x/y
        if (order === 'dsc')
            [x, y] = [y, x];
        // Sort logic
        if (typeof x[key] === 'string' && typeof y[key] === 'string') {
            return String(x[key]).localeCompare(String(y[key]));
        }
        else {
            const a = x[key];
            const b = y[key];
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        }
    });
}
// Pagination ---
function paginationHandler(store) {
    if (store.pagination) {
        // Slice for Pagination
        const filtered = store.base.slice(store.pagination.offset * store.pagination.limit, // start
        store.pagination.offset * store.pagination.limit + store.pagination.limit // end
        );
        // filter by search if currently searching
        if (store.search !== '') {
            store.filtered = store.filtered.slice(0, store.pagination.limit);
            // Set Current Size
            store.pagination.size = store.filtered.length;
            // Set the current page to the first page
            store.pagination.offset = 0;
        }
        else {
            store.filtered = filtered;
            // Set Current Size
            store.pagination.size = store.base.length;
        }
    }
}
