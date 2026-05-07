function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function kebabToPascal(str: string): string {
	return str.split('-').map(capitalize).join('');
}

export function kebabToCamel(str: string): string {
	const pascal = kebabToPascal(str);
	return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}
