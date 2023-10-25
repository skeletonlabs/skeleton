// Action: Focus Trap
export function focusTrap(node: HTMLElement, enabled: boolean) {
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
		// If there is a form with a data-tabindex attribute, get it
		const form = node.querySelector<HTMLElement>('form[data-tabindex]');
		// If not, return null, focusTrap will switch to default behavior
		if (!form) return elemFirst;
		// Get data-indextab value or 0, as a number
		const tabIndex = +(form.getAttribute('data-tabindex') || '0');
		return form.querySelector<HTMLElement>('[tabindex="' + tabIndex + '"]') || elemFirst;
	};

	const onScanElements = (fromObserver: boolean) => {
		if (enabled === false) return;
		// Gather all focusable elements, sorted according to tabindex
		const focusableElems: HTMLElement[] = sortByTabIndex(Array.from(node.querySelectorAll(elemWhitelist)));
		if (focusableElems.length) {
			// Set first/last focusable elements
			elemFirst = focusableElems[0];
			elemLast = focusableElems[focusableElems.length - 1];
			// Auto-focus focusTrapTarget or first focusable element only when not called from observer
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
		update(newArgs: boolean) {
			enabled = newArgs;
			newArgs ? onScanElements(false) : onCleanUp();
		},
		destroy() {
			onCleanUp();
			observer.disconnect();
		}
	};
}
