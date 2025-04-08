function sortPropertiesAlphabetically(object: Record<string, string>) {
	const orderedObject: Record<string, string> = {};
	const sortedEntries = Object.entries(object).sort(([a], [b]) => a.localeCompare(b));
	for (const [key, value] of sortedEntries) {
		orderedObject[key] = value;
	}
	return orderedObject;
}

export { sortPropertiesAlphabetically };
