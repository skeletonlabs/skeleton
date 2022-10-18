// Action: Filter

export function filter(node: HTMLElement, filterName: string) {
	if (filterName === undefined) return;
	const applyFilter = (): void => {
		// Prevent this action on Firebox browsers
		const isFirefox: boolean = navigator.userAgent.indexOf('Firefox') > -1;
		if (isFirefox) {
			return;
		}
		// If the filter name availalbe, apply the Filter
		node.setAttribute('style', `filter: url("#${filterName}")`);
	};
	// On Init
	applyFilter();
	// Lifecycle
	return {
		update(newArgs: any) {
			filterName = newArgs;
			applyFilter();
		}
	};
}
