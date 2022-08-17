// === Data Table Service ===

// Data Mapping ---

export function mapTableSource(keys: any[], object: any[]): any[] {
	return object.map((origRow) => {
		const mappedRow: any = {};
		for (let i = 0; i < keys.length; i++) {
			mappedRow[keys[i]] = origRow[keys[i]];
		}
		return mappedRow;
	});
}

// Sort Handlers ---

export function sortAscNumber(arr: any[], key: string): any[] {
	return arr.sort((x, y) => x[key] - y[key]);
}

export function sortDescNumber(arr: any[], key: string): any[] {
	return arr.sort((x, y) => y[key] - x[key]);
}

export function sortAscString(arr: any[], key: any): any[] {
	return arr.sort((x, y) => {
		let a = String(x[key]).toUpperCase(),
			b = String(y[key]).toUpperCase();
		return a == b ? 0 : a > b ? 1 : -1;
	});
}

export function sortDescString(arr: any[], key: any): any[] {
	return arr.sort((x, y) => {
		let a = String(x[key]).toUpperCase(),
			b = String(y[key]).toUpperCase();
		return a == b ? 0 : a > b ? -1 : 1;
	});
}
