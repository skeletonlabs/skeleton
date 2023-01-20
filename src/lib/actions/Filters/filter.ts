// Action: Filter

export function filter(node: HTMLElement, filterName: string) {
	// Return if Firefox browser
	const isFirefox: boolean = navigator.userAgent.indexOf('Firefox') > -1;
	if (isFirefox) return;
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
