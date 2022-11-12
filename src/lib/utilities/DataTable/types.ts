// Data Table Types

import type { PaginationSettings } from '$lib/components/Paginator/types';

export interface DataTableModel {
	/** The original unfiltered source data. */
	source: any[];
	/** The filtered source data. Shows in UI. */
	filtered: any[];
	// current: any[];
	/** An array of selected row objects. */
	selection?: any[];
	/** The current search term. */
	search?: string;
	/** The current sort state. */
	sort: string;
	/** The Pagination component settings. */
	pagination?: PaginationSettings;
}
