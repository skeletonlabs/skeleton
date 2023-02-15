import { get, writable, type Writable } from 'svelte/store';

// Types
import type { PopupSettings } from './types';

// Store
export const storePopover: Writable<any> = writable(undefined);

// Action
export function popover(node: HTMLElement, args: PopupSettings) {
	const { event, target, placement, middleware }: PopupSettings = args;
	if (!event || !target) return;

	// Local
	const { computePosition, autoUpdate, flip, shift, offset, arrow } = get(storePopover);
	const elemPopover: HTMLElement | null = document.querySelector(`[data-popover="${target}"]`);
	const elemArrow: HTMLElement | null = elemPopover?.querySelector(`.arrow`) ?? null;
	let isVisible: boolean = false;

	// On Init (floating ui)
	function render(): void {
		if (!elemPopover || !computePosition) return;

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
		computePosition(node, elemPopover, {
			placement: placement ?? 'bottom',
			middleware: genMiddlware
		}).then(({ x, y, placement, middlewareData }: any) => {
			Object.assign(elemPopover.style, {
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
		if (isVisible && !elemPopover?.contains(event.target)) hide();
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
		if (!elemPopover) return;
		elemPopover.style.display = 'block';
		elemPopover.style.opacity = '1';
		isVisible = true;
	}
	function hide(): void {
		if (!elemPopover) return;
		elemPopover.style.opacity = '0';
		const cssTransitionDuration = parseFloat(window.getComputedStyle(elemPopover).transitionDuration.replace('s', '')) * 1000;
		setTimeout(() => {
			elemPopover.style.display = 'hidden';
			isVisible = false;
		}, cssTransitionDuration);
	}

	// Auto Update
	autoUpdate(node, elemPopover, render);

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
