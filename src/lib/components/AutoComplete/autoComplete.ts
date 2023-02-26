import type { AutocompleteSettings } from '$lib/components/AutoComplete/types';

export function autoComplete(input: HTMLInputElement, args: AutocompleteSettings) {
	// prettier-ignore
	const {
		event = 'click',
		target,
    }: AutocompleteSettings = args;

	if (!event || !target) return;

	// Local
	const itemList: HTMLElement | null = document.querySelector(`[data-autocomplete="${target}"]`);
	let isVisible = false;

	// Local A11y Variables
	const elemWhitelist = '.autocomplete-item';
	let activeFocusIdx: number;
	let focusableElems: HTMLElement[];

	function onClick(event: any) {
		if (!input || !target) return;

		itemList?.classList.replace('hidden', 'block');
		window.addEventListener('click', onWindowClick, true);

		// Set Focusable State
		if (!isVisible) {
			isVisible = true;
			setFocusableState();
		}
	}

	function onWindowClick(event: any) {
		const clickedEl = event.target as HTMLElement;

		if (clickedEl.classList[0] === 'input') {
			return;
		} else {
			isVisible = false;
			itemList?.classList.replace('block', 'hidden');
		}
	}

	// Set Focusable State
	function setFocusableState(): void {
		if (!itemList) return;
		// Create array of all focusable elements, so that we can iterate through them
		focusableElems = Array.from(itemList?.querySelectorAll(elemWhitelist));
		// reset the focus index
		activeFocusIdx = -1;
		// Automatically focus the element if openWithFocus is true (for example if
		// the menu was opened with Enter instead of with a click
		activeFocusIdx = 0;
		focusableElems[0]?.focus();
	}

	// A11y Keydown Handler
	const onWindowKeyDown = (event: KeyboardEvent): void => {
		if (!isVisible) return;
		// Handle keys
		const key: string = event.key;
		// TODO: || (document.activeElement !== node && key === 'Tab')
		if (key === 'ArrowDown') {
			event.preventDefault();
			if (activeFocusIdx < focusableElems.length - 1) {
				// Move down the menu
				activeFocusIdx += 1;
				focusableElems[activeFocusIdx]?.focus();
			}
		} else if (key === 'ArrowUp') {
			event.preventDefault();
			if (activeFocusIdx > 0) {
				// Move up the menu
				activeFocusIdx -= 1;
				focusableElems[activeFocusIdx]?.focus();
			} else if (focusableElems.length && activeFocusIdx === -1) {
				// Start at the bottom of the menu if first key is arrow up key
				event.preventDefault();
				activeFocusIdx = focusableElems.length - 1;
				focusableElems[activeFocusIdx]?.focus();
			}
		} else if (key === ' ' || key === 'Spacebar') {
			event.preventDefault();
			input.value = focusableElems[activeFocusIdx].innerText;
		}
	};

	// Event Listners
	if (event === 'click') {
		input.addEventListener('click', onClick, true);
	}

	// A11y Event Listeners
	window.addEventListener('keydown', onWindowKeyDown, true);

	// Lifecycle
	return {
		destroy() {
			window.removeEventListener('click', onWindowClick, true);
			input.removeEventListener('click', onClick, true);
			window.removeEventListener('keydown', onWindowKeyDown, true);
		}
	};
}
