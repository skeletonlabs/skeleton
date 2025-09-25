export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function kebabToPascal(str: string) {
	return str.split('-').map(capitalize).join('');
}

export function kebabToCamel(str: string) {
	const pascal = kebabToPascal(str);
	return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

export function pascalToKebab(str: string) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
