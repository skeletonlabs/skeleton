// Data Table Types

import type { PaginationSettings } from '../..';

export interface DataTableModel<T extends Record<PropertyKey, unknown>> {
	/** The original source data. */
	source: T[];
	/** The unfiltered, modified source data */
	base: Data<T>;
	/** The filtered source data, shown in UI. */
	filtered: Data<T>;
	/** An array of selected row objects. */
	selection: Data<T>;
	/** The current search term. */
	search: string;
	/** The current sort key. */
	sort: keyof T | '';
	/** The current state of the sort key. */
	sortState: { lastKey: keyof T | '' | null; asc: boolean };
	/** The Paginator component settings. */
	pagination?: PaginationSettings;
}

export interface DataTableOptions<T> {
	/** The current search term. */
	search?: string;
	/** The current sort key. */
	sort?: keyof T | '';
	/** The Paginator component settings. */
	pagination?: PaginationSettings;
}

export type Data<T> = (T & { dataTableChecked: boolean })[];
