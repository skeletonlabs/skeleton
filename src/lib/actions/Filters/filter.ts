// Action: Filter

export function filter(node: HTMLElement, filterName: string): void {
	// Prevent this action on Firebox browsers
	const isFirefox: boolean = navigator.userAgent.indexOf('Firefox') > -1;
	if (isFirefox) {
		return;
	}
	// If the filter name is missing, do not progress
	if (!filterName || filterName === '') {
		return;
	}
	// Apply the Filter
	node.setAttribute('style', `filter: url("#${filterName}")`);
}
