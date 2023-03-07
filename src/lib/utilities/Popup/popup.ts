import { get, writable, type Writable } from 'svelte/store';

// Types
import type { PopupSettings } from './types';

// Store
export const storePopup: Writable<any> = writable(undefined);

// Action
export function popup(node: HTMLElement, args: PopupSettings) {
	// prettier-ignore
	const {
		event = 'click',
		target,
		placement,
		closeQuery = 'a[href], button',
		middleware,
		state 
	}: PopupSettings = args;
	if (!event || !target) return;

	// Local
	const { computePosition, autoUpdate, flip, shift, offset, arrow } = get(storePopup);
	const elemPopup: HTMLElement | null = document.querySelector(`[data-popup="${target}"]`);
	const elemArrow: HTMLElement | null = elemPopup?.querySelector(`.arrow`) ?? null;
	let isVisible: boolean = false;
	let autoUpdateCleanup: any;

	// Local A11y Variables
	const elemWhitelist: string = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
	let activeFocusIdx: number;
	let focusableElems: HTMLElement[];

	// On Init (floating ui)
	function render(): void {
		if (!elemPopup || !computePosition) return;

		// Construct Middlware
		// Note the order: https://floating-ui.com/docs/middleware#ordering
		const genMiddlware = [];
		// https://floating-ui.com/docs/offset
		if (offset) genMiddlware.push(offset(middleware?.offset ?? 8));
		// https://floating-ui.com/docs/shift
		if (shift) genMiddlware.push(shift(middleware?.shift ?? { padding: 8 }));
		// https://floating-ui.com/docs/flip
		if (flip) genMiddlware.push(flip(middleware?.flip));
		// https://floating-ui.com/docs/arrow
		if (arrow && elemArrow) genMiddlware.push(arrow(middleware?.arrow ?? { element: elemArrow }));

		// https://floating-ui.com/docs/computePosition
		computePosition(node, elemPopup, {
			placement: placement ?? 'bottom',
			middleware: genMiddlware
		}).then(({ x, y, placement, middlewareData }: any) => {
			Object.assign(elemPopup.style, {
				left: `${x}px`,
				top: `${y}px`
			});
			// Handle Arrow Placement:
			// https://floating-ui.com/docs/arrow
			if (elemArrow) {
				const { x: arrowX, y: arrowY } = middlewareData.arrow;
				// @ts-ignore
				const staticSide = {
					top: 'bottom',
					right: 'left',
					bottom: 'top',
					left: 'right'
				}[placement.split('-')[0]];
				Object.assign(elemArrow.style, {
					left: arrowX != null ? `${arrowX}px` : '',
					top: arrowY != null ? `${arrowY}px` : '',
					right: '',
					bottom: '',
					[staticSide]: '-4px'
				});
			}
			// Set Focusable State
			setFocusableState();
		});
	}

	// Set Focusable State
	function setFocusableState(): void {
		if (!elemPopup) return;
		// Create array of all focusable elements, so that we can iterate through them
		focusableElems = Array.from(elemPopup?.querySelectorAll(elemWhitelist));
		// reset the focus index
		activeFocusIdx = -1;
		// Automatically focus the element if openWithFocus is true (for example if
		// the menu was opened with Enter instead of with a click
		activeFocusIdx = 0;
		focusableElems[0]?.focus();
	}

	// Window Click Handler
	const onWindowClick = (event: any) => {
		if (!node || !elemPopup) return;
		// If click is within the trigger node
		const clickTriggerNode = node.contains(event.target);
		if (clickTriggerNode) {
			isVisible == false ? show() : close();
		} else {
			// If click is outside the popup
			const clickedOutsidePopup = elemPopup && !elemPopup.contains(event.target);
			if (clickedOutsidePopup) {
				close();
			} else {
				// If click is interactive child element within popup (ex: anchor or button)
				const interactiveMenuElems = elemPopup?.querySelectorAll(closeQuery);
				if (!interactiveMenuElems.length) return;
				interactiveMenuElems.forEach((elem) => {
					if (elem.contains(event.target)) close();
				});
			}
		}
	};

	// Hover Handlers
	const onMouseOver = () => {
		show();
		isVisible = true;
		stateEventHandler(true);
	};
	const onMouseOut = () => {
		close();
		isVisible = false;
		stateEventHandler(false);
	};

	// Visbility
	function show(): void {
		if (!elemPopup) return;
		render(); // update
		elemPopup.style.display = 'block';
		elemPopup.style.opacity = '1';
		elemPopup.style.pointerEvents = 'initial';
		isVisible = true;
		stateEventHandler(true);
		// Utilize autoUpdate ONLY when the popup is.
		// https://floating-ui.com/docs/autoUpdate
		autoUpdateCleanup = autoUpdate(node, elemPopup, render);
	}
	function close(): void {
		if (!elemPopup) return;
		elemPopup.style.opacity = '0';
		const cssTransitionDuration = parseFloat(window.getComputedStyle(elemPopup).transitionDuration.replace('s', '')) * 1000;
		setTimeout(() => {
			elemPopup.style.display = 'hidden';
			elemPopup.style.pointerEvents = 'none';
			isVisible = false;
			stateEventHandler(false);
		}, cssTransitionDuration);
		// Cleanup autoUpdate on close (REQUIRED)
		if (autoUpdateCleanup) autoUpdateCleanup();
	}

	// State Handler
	const stateEventHandler = (value: boolean): void => {
		if (state) state({ state: value });
	};

	// A11y Keydown Handler
	const onWindowKeyDown = (event: KeyboardEvent): void => {
		if (!isVisible) return;
		// Handle keys
		const key: string = event.key;
		// TODO: || (document.activeElement !== node && key === 'Tab')
		if (key === 'Escape') {
			event.preventDefault();
			close();
			node.focus();
			return;
		} else if (key === 'ArrowDown') {
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
		}
	};

	// On Init
	render();

	// Event Listners
	if (event === 'click') {
		window.addEventListener('click', onWindowClick, true);
	}
	if (event === 'hover') {
		node.addEventListener('mouseover', show, true);
		node.addEventListener('mouseout', close, true);
	}
	if (event === 'hover-click') {
		node.addEventListener('mouseover', show, true);
		window.addEventListener('click', onWindowClick, true);
	}
	// A11y Event Listeners
	window.addEventListener('keydown', onWindowKeyDown, true);

	// Lifecycle
	return {
		update(newArgs: any) {
			args = newArgs;
		},
		destroy() {
			// ---
			window.removeEventListener('click', onWindowClick, true);
			node.removeEventListener('mouseover', onMouseOver, true);
			node.removeEventListener('mouseout', onMouseOut, true);
			// ---
			window.removeEventListener('keydown', onWindowKeyDown, true);
		}
	};
}
