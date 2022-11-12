// Data Table Types

import type { PaginationSettings } from '$lib/components/Paginator/types';

export interface DataTableModel {
	/** The original unfiltered source data. */
	source: any[];
	/** The filtered source data, shown in UI. */
	filtered: any[];
	/** An array of selected row objects. */
	selection?: any[];
	/** The current search term. */
	search?: string;
	/** The current sort key. */
	sort: string;
	/** The Paginator component settings. */
	pagination?: PaginationSettings;
}
