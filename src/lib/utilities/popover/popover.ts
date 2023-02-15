import { get, writable, type Writable } from 'svelte/store';

// Store
export const storePopover: Writable<any> = writable(undefined);

// Action
export function popover(node: HTMLElement, args: any) {
	const [event, target, options] = args;
	if (!event || !target) return;

	// Local
	const { computePosition, autoUpdate, flip, shift, offset, arrow } = get(storePopover);
	const elemPopover: HTMLElement | null = document.querySelector(`[data-popover="${target}"]`);
	const elemArrow: HTMLElement | null = elemPopover?.querySelector(`.arrow`) ?? null;
	let isVisible: boolean = false;

	// On Init (floating ui)
	// options?.skidding
	function render(): void {
		if (!elemPopover || !computePosition || !flip || !shift || !offset || !arrow) return;

		// https://floating-ui.com/docs/computePosition
		computePosition(node, elemPopover, {
			placement: options?.placement ?? 'bottom',
			middleware: [
				// https://floating-ui.com/docs/offset
				offset(options?.offset ?? 8),
				// https://floating-ui.com/docs/flip
				flip(),
				// https://floating-ui.com/docs/shift
				shift({ padding: 8 }),
				// https://floating-ui.com/docs/arrow
				arrow({ element: elemArrow })
			]
		}).then(({ x, y, placement, middlewareData }: any) => {
			Object.assign(elemPopover.style, {
				left: `${x}px`,
				top: `${y}px`
			});
			if (!elemArrow) return;
			// Accessing the data
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
		});
	}

	// Click Handlers
	const onNodeClick = (event: any) => {
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
		render();
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
	const cleanup = autoUpdate(node, elemPopover, render);

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
