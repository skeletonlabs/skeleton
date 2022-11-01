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
type StringOrNumberKey<Type> = keyof {
	[Key in keyof Type as Type[Key] extends string | number ? Key : never]: Type[Key];
};

export function sort<Obj, Key extends StringOrNumberKey<Obj>>(arr: Obj[], key: Key, isDescending = false): Obj[] {
	if (isDescending) return sortDesc(arr, key);
	return sortAsc(arr, key);
}

export function sortAsc<Obj, Key extends StringOrNumberKey<Obj>>(arr: Obj[], key: Key): Obj[] {
	return arr.sort((x, y) => (typeof x[key] === 'string' && typeof y[key] === 'string' ? String(x[key]).localeCompare(String(y[key])) : (x[key] as number) - (y[key] as number)));
}

export function sortDesc<Obj, Key extends StringOrNumberKey<Obj>>(arr: Obj[], key: Key): Obj[] {
	return arr.sort((x, y) => (typeof y[key] === 'string' && typeof x[key] === 'string' ? String(y[key]).localeCompare(String(x[key])) : (y[key] as number) - (x[key] as number)));
}
