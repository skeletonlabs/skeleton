import { get, writable, type Writable } from 'svelte/store';

// Types
import type { PopupSettings } from './types';
import type { Middleware } from '@floating-ui/dom';

// Store
type PopupStore = {
	computePosition: typeof import('@floating-ui/dom').computePosition;
	autoUpdate: typeof import('@floating-ui/dom').autoUpdate;
	flip: typeof import('@floating-ui/dom').flip;
	shift: typeof import('@floating-ui/dom').shift;
	offset: typeof import('@floating-ui/dom').offset;
	arrow: typeof import('@floating-ui/dom').arrow;
};
export const storePopup: Writable<PopupStore | undefined> = writable(undefined);

function isNode(el?: unknown): el is Node {
	return el instanceof Node;
}

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
	const storeValue = get(storePopup);
	if (!storeValue) throw Error('You need to initialise the popup store before using the popup action.');
	const { computePosition, autoUpdate, flip, shift, offset, arrow } = storeValue;
	const elemPopup: HTMLElement | null = document.querySelector(`[data-popup="${target}"]`);
	const elemArrow: HTMLElement | null = elemPopup?.querySelector(`.arrow`) ?? null;
	let isVisible = false;
	let autoUpdateCleanup: () => void;

	// Local A11y Variables
	const elemWhitelist = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
	let activeFocusIdx: number;
	let focusableElems: HTMLElement[];

	// On Init (floating ui)
	function render(): void {
		if (!elemPopup || !computePosition) return;

		// Construct Middlware
		// Note the order: https://floating-ui.com/docs/middleware#ordering
		const genMiddlware: Middleware[] = [];
		// https://floating-ui.com/docs/offset
		if (offset) genMiddlware.push(offset(middleware?.offset ?? 8));
		// https://floating-ui.com/docs/shift
		if (shift) genMiddlware.push(shift(middleware?.shift ?? { padding: 8 }));
		// https://floating-ui.com/docs/flip
		if (flip) genMiddlware.push(flip(middleware?.flip));
		// https://floating-ui.com/docs/arrow
		if (arrow && elemArrow) {
			if (middleware?.arrow) {
				// https://floating-ui.com/docs/arrow
				const elemArrow = document.querySelector(middleware.arrow.element);
				if (!elemArrow) throw Error('Arrow element not found. Please check your selector.');
				genMiddlware.push(arrow({ element: elemArrow }));
			} else {
				genMiddlware.push(arrow({ element: elemArrow }));
			}
		}

		// https://floating-ui.com/docs/computePosition
		computePosition(node, elemPopup, {
			placement: placement ?? 'bottom',
			middleware: genMiddlware
		}).then(({ x, y, placement, middlewareData }) => {
			Object.assign(elemPopup.style, {
				left: `${x}px`,
				top: `${y}px`
			});
			// Handle Arrow Placement:
			// https://floating-ui.com/docs/arrow
			if (elemArrow && middlewareData.arrow) {
				const { x: arrowX, y: arrowY } = middlewareData.arrow;

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
					...(staticSide ? { [staticSide]: '-4px' } : {})
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
		// if the popup was triggered via focus, we don't want to move that focus
		if (event !== 'focus' && event !== 'focus-click') {
			focusableElems[0]?.focus();
		}
	}

	// Window Click Handler
	const onWindowClick = (event: MouseEvent) => {
		if (!node || !elemPopup || !isNode(event.target)) return;
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
					if (isNode(event.target) && elem.contains(event.target)) close();
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
	function closeOnFocusOut(e: FocusEvent) {
		// if the focus is within the popup, or on the trigger node, do nothing
		if (e.relatedTarget instanceof Element && (elemPopup?.contains(e.relatedTarget) || node.isSameNode(e.relatedTarget))) return;
		close();
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
	if (event === 'focus' || event === 'focus-click') {
		if (!elemPopup) return;
		node.addEventListener('focusin', show, true);
		node.addEventListener('focusout', closeOnFocusOut, true);
		// if we tab into a closed popup, we will tab into the last element of any focusable element in elemPopup
		// so we add an event listener to move the focus back to the node the `use:popup` directive is on
		elemPopup.addEventListener('focusin', () => !isVisible && node.focus(), true);
		// when we focus off the end of the list, close the popup
		elemPopup.addEventListener('focusout', closeOnFocusOut, true);
	}
	if (event === 'focus-click') {
		// we must use mousedown instead of click because click fires after focusin, meaning isVisible would always be true
		// if the active element (one with current focus) is the same as the node (the element with the use:popup directive),
		// then the user clicked on the node, so we should toggle the state of the popup
		node.addEventListener('mousedown', () => (document.activeElement?.isSameNode(node) && isVisible ? close() : open()), true);
	}
	// A11y Event Listeners
	window.addEventListener('keydown', onWindowKeyDown, true);

	// Lifecycle
	return {
		update(newArgs: PopupSettings) {
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
