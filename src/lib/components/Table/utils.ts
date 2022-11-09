// Table Utils

// Cell Formatters ---

/** Wrap object key value with HTML tags.  */
export function tableCellFormatter(object: any[], key: string, openTag: string, closeTag: string): any[] {
	return object.map((row) => {
		if (row[key]) {
			row[key] = `${openTag}${row[key]}${closeTag}`;
		}
		return row;
	});
}

// Source Formatters ---

/** Map an object to a defined order. */
export function tableSourceMapper(object: any[], keys: string[]): any[] {
	return object.map((row) => {
		const mappedRow: any = {};
		keys.forEach((key) => (mappedRow[key] = row[key]));
		return mappedRow;
	});
}

/** Map an array of objects to an array of values. */
export function tableSourceValues(object: any[]): any[] {
	return object.map((row) => Object.values(row));
}

/** Sets object order and returns values. */
export function tableMapperValues(object: any[], keys: string[]): any[] {
	return tableSourceValues(tableSourceMapper(object, keys));
}
