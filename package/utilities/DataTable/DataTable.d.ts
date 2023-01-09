import type { DataTableModel, DataTableOptions } from './types';
export * from './types';
export * from './actions';
/** Creates the writeable store for the data table */
export declare function createDataTableStore<T extends Record<PropertyKey, any>>(source: T[], options?: DataTableOptions<T>): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<DataTableModel<T>>, invalidate?: ((value?: DataTableModel<T> | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    set: (this: void, value: DataTableModel<T>) => void;
    /** Sets a new data source while maintaining the state of the original source */
    updateSource: (data: T[]) => void;
    /** Triggered by the "select all" checkbox to toggle all row selection. */
    selectAll: (checked: boolean) => void;
    /** Allows you to dynamically pre-select rows on-demand. */
    select: (key: keyof T, valuesArr: unknown[]) => void;
    /** Listens for clicks to a table heading with `data-sort` attribute. Updates `$dataTableModel.sort`. */
    sort: (event: Event) => void;
};
/** Listens for changes to `$dataTableModel` and triggers: search, selection, sort, and pagination. */
export declare function dataTableHandler<T extends Record<PropertyKey, any>>(model: DataTableModel<T>): void;
