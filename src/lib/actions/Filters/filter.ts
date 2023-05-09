// Action: Filter

export function filter(node: HTMLElement, filterName: string) {
	// Return if no filterName provided
	if (filterName === undefined) return;

	const applyFilter = (): void => {
		node.setAttribute('style', `filter: url("${filterName}")`);
	};
	applyFilter();

	return {
		update(newArgs: any) {
			filterName = newArgs;
			applyFilter();
		}
	};
}
