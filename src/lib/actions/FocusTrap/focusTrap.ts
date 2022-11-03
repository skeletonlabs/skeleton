// Action: Focus Trap

export function focusTrap(node: HTMLElement, enabled: boolean) {
	const elemWhitelist: string = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
	let elemFirst: HTMLElement;
	let elemLast: HTMLElement;

	function lastLastKeydown(e: KeyboardEvent): void {
		if (e.code === 'Tab') {
			e.preventDefault();
			elemFirst.focus();
		}
	}

	const onInit = () => {
		if (enabled === false) return;
		// Gather all focusable elements
		const focusableElems: any = node.querySelectorAll(elemWhitelist);
		if (focusableElems !== null) {
			// Set first/last focusable elements
			elemFirst = focusableElems[0];
			elemLast = focusableElems[focusableElems.length - 1];
			// Auto-focus first focusable element
			elemFirst.focus();
			// Listen for keydown on last element
			elemLast.addEventListener('keydown', lastLastKeydown);
		}
	};
	onInit();

	function onDestory(): void {
		if (elemLast) elemLast.removeEventListener('keydown', lastLastKeydown);
	}

	// Lifecycle
	return {
		update(newArgs: any) {
			enabled = newArgs;
			newArgs ? onInit() : onDestory();
		},
		destroy() {
			onDestory();
		}
	};
}
