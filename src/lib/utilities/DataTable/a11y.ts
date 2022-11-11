// Table A11y Action ---

export function tableA11y(node: HTMLElement) {
	const keyWhitelist: string[] = ['ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'Home', 'End'];
	// on:keydown
	const onKeyDown = (event: KeyboardEvent) => {
		// console.log('keydown triggered');
		if (keyWhitelist.includes(event.code)) {
			event.preventDefault();
			// prettier-ignore
			switch (event.code) {
				case 'ArrowUp': a11ySetActiveCell(node, 0, -1); break;
				case 'ArrowDown': a11ySetActiveCell(node, 0, 1); break;
				case 'ArrowLeft': a11ySetActiveCell(node, -1, 0); break;
				case 'ArrowRight': a11ySetActiveCell(node, 1, 0); break;
				case 'Home': a11yJumpToOuterColumn(node, 'first'); break;
				case 'End': a11yJumpToOuterColumn(node, 'last'); break;
				default: break;
			}
		}
	};
	// Event Listner
	node.addEventListener('keydown', onKeyDown);
	// Lifecycle
	return {
		destroy() {
			node.removeEventListener('keydown', onKeyDown);
		}
	};
}

// Utilities ---

function a11ySetActiveCell(node: HTMLElement, x: number, y: number): void {
	// Focused Element
	const focusedElem: Element | null = document.activeElement;
	if (!focusedElem || !focusedElem.parentElement || !focusedElem.parentElement.ariaRowIndex || !focusedElem.ariaColIndex) return;
	const focusedElemRowIndex: number = parseInt(focusedElem.parentElement.ariaRowIndex);
	const focusedElemColIndex: number = parseInt(focusedElem.ariaColIndex);
	// Target Element
	const targetRowElement: HTMLElement | null = node.querySelector(`[aria-rowindex="${focusedElemRowIndex + y}"]`);
	if (targetRowElement !== null) {
		const targetColElement: HTMLElement | null = targetRowElement.querySelector(`[aria-colindex="${focusedElemColIndex + x}"]`);
		if (targetColElement !== null) {
			targetColElement.focus();
		}
	}
}
function a11yGetTargetElem(node: HTMLElement): HTMLElement | null {
	// Focused Element
	const focusedElem: Element | null = document.activeElement;
	if (!focusedElem || !focusedElem.parentElement || !focusedElem.parentElement.ariaRowIndex) return null;
	const focusedElemRowIndex: number = parseInt(focusedElem.parentElement.ariaRowIndex);
	// Return Target Element
	return node.querySelector(`[aria-rowindex="${focusedElemRowIndex}"]`);
}

function a11yJumpToOuterColumn(node: HTMLElement, type: 'first' | 'last' = 'first'): void {
	const targetRowElement = a11yGetTargetElem(node);
	if (targetRowElement === null) return;
	const lastIndex: number = targetRowElement.children.length;
	const selected = type === 'first' ? 1 : lastIndex;
	const targetColElement: HTMLElement | null = targetRowElement.querySelector(`[aria-colindex="${selected}"]`);
	if (targetColElement === null) return;
	targetColElement.focus();
}
