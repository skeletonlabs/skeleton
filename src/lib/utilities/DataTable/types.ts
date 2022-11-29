// Data Table Types

import type { PaginationSettings } from '$lib/components/Paginator/types';

export interface DataTableModel<T> {
	/** The original unfiltered source data. */
	source: Data<T>;
	/** The filtered source data, shown in UI. */
	filtered: Data<T>;
	/** An array of selected row objects. */
	selection?: T[];
	/** The current search term. */
	search?: string;
	/** The current sort key. */
	sort: keyof T | '';
	/** The current sort direction. */
	sortState: { lastKey: keyof T | '' | null; asc: boolean };
	/** The Paginator component settings. */
	pagination?: PaginationSettings;
}

export interface DataTableOptions<T> {
	/** An array of selected row objects. */
	selection?: T[];
	/** The current search term. */
	search?: string;
	/** The Paginator component settings. */
	pagination?: PaginationSettings;
}

export type Data<T> = (T & { dataTableChecked: boolean })[];
