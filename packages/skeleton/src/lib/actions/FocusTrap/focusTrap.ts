// Action: Focus Trap
export function focusTrap(node: HTMLElement, enabled: boolean) {
	const elemWhitelist = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
	let firstFocusableChild: HTMLElement;
	let lastFocusableChild: HTMLElement;

	function keydownHandler(event: KeyboardEvent) {

		// We do not care for any keys other than tab so we return early, also return if focustrap is disabled
		// Note: All code after this statement is with 'Tab is pressed' context in mind.
		if (event.key !== 'Tab' || !enabled) return;

		// If the user holds shift and the currently active element is the firstFocusableChild, focus the last child
		if (event.shiftKey && document.activeElement === firstFocusableChild) {
			event.preventDefault();
			lastFocusableChild.focus();
		} 

		// If the currently active element is the lastFocusableChild, focus the first child
		else if (!event.shiftKey && document.activeElement === lastFocusableChild) {
			event.preventDefault();
			firstFocusableChild.focus();
		}

		// If the activeElement is currently outside our node focus the first child
		else if (!node.contains(document.activeElement)) {
			event.preventDefault();
			firstFocusableChild.focus();
		}
	}
	document.addEventListener('keydown', keydownHandler);

	// Get first and last focusable (and therefor tabbable) child from element
	function getFirstAndLastFocusableChild(element: HTMLElement) {
		const focusableChilds: HTMLElement[] = Array.from(element.querySelectorAll(elemWhitelist));
		const first = focusableChilds.at(0);
		const last = focusableChilds.at(-1);
		return { first, last };
	}

	function determineFocusableChilds(fromObserver: boolean)  {
		if (!enabled) return;
		// Gather all focusable elements
		const focusableElems: HTMLElement[] = Array.from(node.querySelectorAll(elemWhitelist));
		if (focusableElems.length) {
			// Get first and last focusable child from the node
			const { first, last } = getFirstAndLastFocusableChild(node);
			if (!first || !last) return;
			firstFocusableChild = first;
			lastFocusableChild = last;
			// Auto-focus first focusable element only when not called from observer
			if (!fromObserver) firstFocusableChild.focus();
		}
	};
	determineFocusableChilds(false);
	

	// When children of node are changed (added or removed)
	const onObservationChange = (mutationRecords: MutationRecord[], observer: MutationObserver) => {
		if (mutationRecords.length) determineFocusableChilds(true);
		return observer;
	};
	const observer = new MutationObserver(onObservationChange);
	observer.observe(node, { childList: true, subtree: true });

	// Lifecycle
	return {
		update(newArgs: boolean) {
			enabled = newArgs;
			if (newArgs) determineFocusableChilds(false)
		},
		destroy() {
			document.removeEventListener('keydown', keydownHandler);
			observer.disconnect();
		}
	};
}
