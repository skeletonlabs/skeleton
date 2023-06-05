const strictlyElementStack: HTMLElement[] = [];

export function shouldFocusStrictly(element: HTMLElement): boolean {
	const focusStrict = hasFocusStrict(element);
	// If the element is focused strictly but not at the top of the stack we return false since we only prioritize elements at the top of the stack
	if (focusStrict && strictlyElementStack.at(-1) !== element) return false;
	return focusStrict;
}

export function registerToStrictlyStack(element: HTMLElement) {
	// Only allow elements that have the data-focus-strict atrtribute set and don't already exist in the stack
	if (hasFocusStrict(element) && !strictlyElementStack.includes(element)) strictlyElementStack.push(element);
}

export function removeFromStrictlyStack(element: HTMLElement) {
	const index = strictlyElementStack.indexOf(element);
	if (index > -1) {
		strictlyElementStack.splice(index, 1);
	}
}

// Returns wether a element has the data-focus-strict attribute set to true or false
export function hasFocusStrict(element: HTMLElement) {
	const strictFocusAttribute = element.dataset.focusStrict;
	const focusIsStrict = strictFocusAttribute === '' || strictFocusAttribute === 'true';
	return focusIsStrict;
}
