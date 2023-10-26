type FocusTrapArgs = boolean | { enabled: boolean; tabIndex?: number };
// Action: Focus Trap
export function focusTrap(node: HTMLElement, args: FocusTrapArgs) {
	let enabled = typeof args === 'boolean' ? args : args.enabled;
	const tabIndex = typeof args === 'boolean' ? null : args.tabIndex;
	// export function focusTrap(node: HTMLElement, enabled: boolean, tabIndex?: number) {
	const elemWhitelist =
		'a[href]:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';
	let elemFirst: HTMLElement;
	let elemLast: HTMLElement;

	// When the first element is selected, shift+tab pressed, jump to the last selectable item.
	function onFirstElemKeydown(e: KeyboardEvent): void {
		if (e.shiftKey && e.code === 'Tab') {
			e.preventDefault();
			elemLast.focus();
		}
	}

	// When the last item selected, tab pressed, jump to the first selectable item.
	function onLastElemKeydown(e: KeyboardEvent): void {
		if (!e.shiftKey && e.code === 'Tab') {
			e.preventDefault();
			elemFirst.focus();
		}
	}

	// Sort focusable elements by tabindex, positive first, then 0
	const sortByTabIndex = (focusableElems: HTMLElement[]): HTMLElement[] => {
		const sortedFocusableElems = focusableElems.filter((el) => el.tabIndex > 0).sort((a, b) => a.tabIndex - b.tabIndex);
		sortedFocusableElems.push(...focusableElems.filter((el) => el.tabIndex == 0 || !el.tabIndex));
		return sortedFocusableElems;
	};

	// Get focusTrapTarget element or first focusable element
	const getFocusTrapTarget = (elemFirst: HTMLElement) => {
		if (!tabIndex) return elemFirst;
		// Return element with data-tabindex matching value, or elemFirst
		return node.querySelector<HTMLElement>('[data-tabindex="' + tabIndex + '"]') || elemFirst;
	};

	const onScanElements = (fromObserver: boolean) => {
		if (enabled === false) return;
		// Gather all focusable elements, sorted according to tabindex
		// const focusableElems: HTMLElement[] = sortByTabIndex(Array.from(node.querySelectorAll(elemWhitelist)));
		const focusableElems: HTMLElement[] = sortByTabIndex(Array.from(node.querySelectorAll(elemWhitelist)));
		if (focusableElems.length) {
			// Set first/last focusable elements
			elemFirst = focusableElems[0];
			elemLast = focusableElems[focusableElems.length - 1];
			// Auto-focus focusTrapTarget or first focusable element only when not called from observer
			// if (!fromObserver) getFocusTrapTarget(elemFirst).focus();
			if (!fromObserver) getFocusTrapTarget(elemFirst).focus();
			// Listen for keydown on first & last element
			elemFirst.addEventListener('keydown', onFirstElemKeydown);
			elemLast.addEventListener('keydown', onLastElemKeydown);
		}
	};
	onScanElements(false);

	function onCleanUp(): void {
		if (elemFirst) elemFirst.removeEventListener('keydown', onFirstElemKeydown);
		if (elemLast) elemLast.removeEventListener('keydown', onLastElemKeydown);
	}

	// When children of node are changed (added or removed)
	const onObservationChange = (mutationRecords: MutationRecord[], observer: MutationObserver) => {
		if (mutationRecords.length) {
			onCleanUp();
			onScanElements(true);
		}
		return observer;
	};
	const observer = new MutationObserver(onObservationChange);
	observer.observe(node, { childList: true, subtree: true });

	// Lifecycle
	return {
		update(newArgs: FocusTrapArgs) {
			args = newArgs;
			enabled = typeof args === 'boolean' ? args : args.enabled;
			enabled ? onScanElements(false) : onCleanUp();
		},
		destroy() {
			onCleanUp();
			observer.disconnect();
		}
	};
}
