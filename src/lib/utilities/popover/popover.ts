import { get, writable, type Writable } from 'svelte/store';

// Store
export const storePopperJs: Writable<any> = writable(undefined);

// Action
export function popover(node: HTMLElement, args: any) {
	const [event, target, options] = args;
	if (!event || !target) return;

	// Local
	const elemPopover: HTMLElement | null = document.querySelector(`[data-popover="${target}"]`);
	let isVisible: boolean = false;

	// On Init
	function onInit(): void {
		const createPopper = get(storePopperJs);
		if (!createPopper) return;
		createPopper(node, elemPopover, {
			placement: options?.placement ?? 'bottom',
			modifiers: [
				{
					name: 'offset',
					options: {
						offset: [options?.skidding, options?.offset ?? 8]
					}
				}
			]
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
		elemPopover.style.opacity = '1';
		elemPopover.style.visibility = 'visible';
		elemPopover.style.pointerEvents = 'initial';
		isVisible = true;
	}
	function hide(): void {
		if (!elemPopover) return;
		elemPopover.style.opacity = '0';
		const cssTransitionDuration = parseFloat(window.getComputedStyle(elemPopover).transitionDuration.replace('s', '')) * 1000;
		setTimeout(() => {
			elemPopover.style.visibility = 'hidden';
			elemPopover.style.pointerEvents = 'none';
			isVisible = false;
		}, cssTransitionDuration);
	}

	// Initialize
	onInit();

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
