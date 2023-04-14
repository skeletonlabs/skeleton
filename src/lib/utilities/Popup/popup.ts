import { get, writable, type Writable } from 'svelte/store';

// Types
import type { PopupSettings } from './types';

// Store
export const storePopup: Writable<any> = writable(undefined);

function isNode(node: unknown): node is Node {
	return node instanceof Node;
}

// Action
export function popup(node: HTMLElement, args: PopupSettings) {
	if (!args.event || !args.target) return;

	// Local
	const { computePosition, autoUpdate, flip, shift, offset, arrow } = get(storePopup);
	const elemPopup: HTMLElement | null = document.querySelector(`[data-popup="${args.target}"]`);
	const elemArrow: HTMLElement | null = elemPopup?.querySelector(`.arrow`) ?? null;
	let isVisible: boolean = false;
	let autoUpdateCleanup: any;

	// Local A11y Variables
	const elemWhitelist = ':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';
	let activeFocusIdx: number;
	let focusableElems: HTMLElement[];

	// On Init (floating ui)
	function render(): void {
		if (!elemPopup || !computePosition) return;

		// Construct Middleware
		// Note the order: https://floating-ui.com/docs/middleware#ordering
		const genMiddleware = [];
		// https://floating-ui.com/docs/offset
		if (offset) genMiddleware.push(offset(args.middleware?.offset ?? 8));
		// https://floating-ui.com/docs/shift
		if (shift) genMiddleware.push(shift(args.middleware?.shift ?? { padding: 8 }));
		// https://floating-ui.com/docs/flip
		if (flip) genMiddleware.push(flip(args.middleware?.flip));
		// https://floating-ui.com/docs/arrow
		if (arrow && elemArrow) genMiddleware.push(arrow(args.middleware?.arrow ?? { element: elemArrow }));

		// https://floating-ui.com/docs/computePosition
		computePosition(node, elemPopup, {
			placement: args.placement ?? 'bottom',
			middleware: genMiddleware
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
		// if the popup was triggered via focus, we don't want to move that focus
		if (args.event !== 'focus' && args.event !== 'focus-click') {
			focusableElems[0]?.focus();
		}
	}

	// Close popup if element matching closeQuery is clicked
	function closeOnQueryClick(clickedEl: Node) {
		if (!clickedEl) return;
		const interactiveMenuElems = elemPopup?.querySelectorAll(args.closeQuery || 'a[href], button');
		if (!interactiveMenuElems?.length) return;
		interactiveMenuElems.forEach((elem) => {
			if (elem.contains(clickedEl)) close();
		});
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
				closeOnQueryClick(event.target);
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

	// Focus Handlers
	function onFocusIn() {
		if (!isVisible) node.focus();
	}
	function onFocusOut(e: FocusEvent) {
		// if the focus is within the popup, or on the trigger node, do nothing
		if (e.relatedTarget instanceof Element && (elemPopup?.contains(e.relatedTarget) || node.isSameNode(e.relatedTarget))) return;
		close();
	}
	function onMouseDown(e: MouseEvent) {
		e.preventDefault();
		if (isNode(document.activeElement)) {
			if (!node.isSameNode(document.activeElement)) {
				node.focus();
				return;
			}
			if (isVisible) close();
			else show();
		}
	}

	// Visibility
	function show(): void {
		if (!elemPopup) return;
		render(); // update
		elemPopup.style.display = 'block';
		elemPopup.style.opacity = '1';
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
			elemPopup.style.display = 'none';
			isVisible = false;
			stateEventHandler(false);
		}, cssTransitionDuration);
		// Cleanup autoUpdate on close (REQUIRED)
		if (autoUpdateCleanup) autoUpdateCleanup();
	}

	// State Handler
	const stateEventHandler = (value: boolean): void => {
		if (args.state) args.state({ state: value });
	};

	// A11y Keydown Handler
	const onWindowKeyDown = (event: KeyboardEvent): void => {
		if (!isVisible) return;
		// Handle keys
		const key: string = event.key;
		// Handle keyboard interaction
		if (key === 'Escape' || (document.activeElement === node && key === 'Tab')) {
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

	// Event Listeners
	if (args.event === 'click') {
		window.addEventListener('click', onWindowClick, true);
	}
	if (args.event === 'hover') {
		node.addEventListener('mouseover', show, true);
		node.addEventListener('mouseout', close, true);
	}
	if (args.event === 'hover-click') {
		node.addEventListener('mouseover', show, true);
		window.addEventListener('click', onWindowClick, true);
	}
	if (args.event === 'focus' || args.event === 'focus-click') {
		if (!elemPopup) return;
		node.addEventListener('focusin', show, true);
		node.addEventListener('focusout', onFocusOut, true);
		// if we tab into a closed popup, we will tab into the last element of any focusable element in elemPopup
		// so we add an event listener to move the focus back to the node the `use:popup` directive is on
		elemPopup.addEventListener('focusin', onFocusIn, true);
		// when we focus off the end of the list, close the popup
		elemPopup.addEventListener('focusout', onFocusOut, true);
		// when an element inside the popup is clicked, close the popup if the element matches the closeQuery
		elemPopup.addEventListener('click', onWindowClick, true);
	}
	if (args.event === 'focus-click') {
		// we must use mousedown instead of click because click fires after focusin, meaning isVisible would always be true
		// if the active element (one with current focus) is the same as the node (the element with the use:popup directive),
		// then the user clicked on the node, so we should toggle the state of the popup
		node.addEventListener('mousedown', onMouseDown, true);
	}
	// A11y Event Listeners
	window.addEventListener('keydown', onWindowKeyDown, true);

	// Lifecycle
	return {
		update(newArgs: PopupSettings) {
			args = newArgs;
			render();
		},
		destroy() {
			// ---
			window.removeEventListener('click', onWindowClick, true);
			node.removeEventListener('mouseover', onMouseOver, true);
			node.removeEventListener('mouseout', onMouseOut, true);
			node.removeEventListener('focusin', show, true);
			node.removeEventListener('focusout', onFocusOut, true);
			node.removeEventListener('mousedown', onMouseDown, true);
			elemPopup?.removeEventListener('focusin', onFocusIn, true);
			elemPopup?.removeEventListener('focusout', onFocusOut, true);
			// ---
			window.removeEventListener('keydown', onWindowKeyDown, true);
		}
	};
}
