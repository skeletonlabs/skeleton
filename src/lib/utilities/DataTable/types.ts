// Data Table Types

export interface DataTableModel {
	/** The original unmodified source data. */
	source: any[];
	/** The current modified source data. This displays in the UI. */
	current: any[];
	/** The current search term. */
	search?: string;
	/** The current sort state. */
	sort?: {
		/** The current sort key. */
		key: string;
		/** The current sort order. */
		asc: boolean;
	};
	/** An array of selected row objects. */
	selection?: any[];
	/** Current Pagination Setting */
	pagination?: {
		offset: number;
		limit: number;
		size: number;
		amounts: number[];
	};
}
