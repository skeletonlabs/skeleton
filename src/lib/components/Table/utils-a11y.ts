// A11y ---

// A11y Input Handler
export function onTableKeydown(elementTable: HTMLElement, event: KeyboardEvent): void {
	const keyWhitelist: string[] = ['ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'Home', 'End'];
	if (keyWhitelist.includes(event.code)) {
		event.preventDefault();
		// prettier-ignore
		switch (event.code) {
			case 'ArrowUp': a11ySetActiveCell(elementTable, 0, -1); break;
			case 'ArrowDown': a11ySetActiveCell(elementTable, 0, 1); break;
			case 'ArrowLeft': a11ySetActiveCell(elementTable, -1, 0); break;
			case 'ArrowRight': a11ySetActiveCell(elementTable, 1, 0); break;
			case 'Home': a11yJumpToOuterColumn(elementTable, 'first'); break;
			case 'End': a11yJumpToOuterColumn(elementTable, 'last'); break;
			default: break;
		}
	}
}

export function a11ySetActiveCell(elementTable: HTMLElement, x: number, y: number): void {
	// Focused Element
	const focusedElem: Element | null = document.activeElement;
	if (!focusedElem || !focusedElem.parentElement || !focusedElem.parentElement.ariaRowIndex || !focusedElem.ariaColIndex) return;
	const focusedElemRowIndex: number = parseInt(focusedElem.parentElement.ariaRowIndex);
	const focusedElemColIndex: number = parseInt(focusedElem.ariaColIndex);
	// Target Element
	const targetRowElement: HTMLElement | null = elementTable.querySelector(`[aria-rowindex="${focusedElemRowIndex + y}"]`);
	if (targetRowElement !== null) {
		const targetColElement: HTMLElement | null = targetRowElement.querySelector(`[aria-colindex="${focusedElemColIndex + x}"]`);
		if (targetColElement !== null) {
			targetColElement.focus();
		}
	}
}
export function a11yGetTargetElem(elementTable: HTMLElement): HTMLElement | null {
	// Focused Element
	const focusedElem: Element | null = document.activeElement;
	if (!focusedElem || !focusedElem.parentElement || !focusedElem.parentElement.ariaRowIndex) return null;
	const focusedElemRowIndex: number = parseInt(focusedElem.parentElement.ariaRowIndex);
	// Return Target Element
	return elementTable.querySelector(`[aria-rowindex="${focusedElemRowIndex}"]`);
}

export function a11yJumpToOuterColumn(elementTable: HTMLElement, type: 'first' | 'last' = 'first'): void {
	const targetRowElement = a11yGetTargetElem(elementTable);
	if (targetRowElement === null) return;
	const lastIndex: number = targetRowElement.children.length;
	const selected = type === 'first' ? 1 : lastIndex;
	const targetColElement: HTMLElement | null = targetRowElement.querySelector(`[aria-colindex="${selected}"]`);
	if (targetColElement === null) return;
	targetColElement.focus();
}
