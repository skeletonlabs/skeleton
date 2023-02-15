import { get, writable, type Writable } from 'svelte/store';

// Types
import type { PopupSettings } from './types';

// Store
export const storePopup: Writable<any> = writable(undefined);

// Action
export function popup(node: HTMLElement, args: PopupSettings) {
	const { event, target, placement, middleware }: PopupSettings = args;
	if (!event || !target) return;

	// Local
	const { computePosition, autoUpdate, flip, shift, offset, arrow } = get(storePopup);
	const elemPopup: HTMLElement | null = document.querySelector(`[data-popup="${target}"]`);
	const elemArrow: HTMLElement | null = elemPopup?.querySelector(`.arrow`) ?? null;
	let isVisible: boolean = false;

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
		});
	}

	// Click Handlers
	const onNodeClick = () => {
		show();
	};
	const onWindowClick = (event: any) => {
		if (isVisible && !elemPopup?.contains(event.target)) hide();
	};

	// Hover Handlers
	const onMouseOver = () => {
		show();
	};
	const onMouseOut = () => {
		hide();
	};

	// Visbility
	function show(): void {
		if (!elemPopup) return;
		elemPopup.style.display = 'block';
		elemPopup.style.opacity = '1';
		isVisible = true;
	}
	function hide(): void {
		if (!elemPopup) return;
		elemPopup.style.opacity = '0';
		const cssTransitionDuration = parseFloat(window.getComputedStyle(elemPopup).transitionDuration.replace('s', '')) * 1000;
		setTimeout(() => {
			elemPopup.style.display = 'hidden';
			isVisible = false;
		}, cssTransitionDuration);
	}

	// Auto Update
	autoUpdate(node, elemPopup, render);

	// Event Listners
	if (event === 'click') {
		window.addEventListener('click', onWindowClick, true);
		node.addEventListener('click', onNodeClick, true);
	}
	if (event === 'hover') {
		node.addEventListener('mouseover', show, true);
		node.addEventListener('mouseout', hide, true);
	}
	if (event === 'hover-click') {
		node.addEventListener('mouseover', show, true);
		window.addEventListener('click', onWindowClick, true);
	}

	// Lifecycle
	return {
		update(newArgs: any) {
			args = newArgs;
		},
		destroy() {
			window.removeEventListener('click', onWindowClick, true);
			node.removeEventListener('click', onNodeClick, true);
			node.removeEventListener('mouseover', onMouseOver, true);
			node.removeEventListener('mouseout', onMouseOut, true);
		}
	};
}
