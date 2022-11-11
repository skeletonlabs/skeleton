// Data Table Types

export interface DataTableModel {
	search: string;
	sort: {
		key: string;
		asc: boolean;
	};
	selection: any[];
	source: any[];
	current: any[];
}
