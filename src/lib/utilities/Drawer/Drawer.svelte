<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { writable, type Writable } from 'svelte/store';

	import { focusTrap } from '$lib/actions/FocusTrap/focusTrap';

	// Props
	/** Provide a store to manage visible state.
	 * @type {Writable(boolean)}
	 */
	export let open: Writable<boolean> = writable(false);
	/** Set the anchor position.
	 * @type {'left' | 'top' | 'right' | 'bottom'}
	 */
	export let position: string = 'left';
	/** Define the Svelte transition animation duration.*/
	export let duration: number = 150;

	// Props (backdrop)
	/** Backdrop - Provide classes to set the backdrop background color*/
	export let bgBackdrop: string = 'bg-backdrop-token';
	/** Backdrop - Provide classes to set the blur style.*/
	export let blur: string = 'backdrop-blur-xs';

	// Props (drawer)
	/** Drawer - Provide classes to set the drawer background color.*/
	export let bgDrawer: string = 'bg-surface-100-800-token';
	/** Drawer - Provide classes to set border color.*/
	export let border: string = '';
	/** Drawer - Provide classes to set border radius.*/
	export let rounded: string = '';
	/** Drawer - Provide classes to override the width.*/
	export let width: string = '';
	/** Drawer - Provide classes to override the height.*/
	export let height: string = '';
	/** Drawer - Provide classes to set margins.*/
	export let margin: string = '';

	// Props (a11y)
	/** Provide an ID of the element labeling the drawer.*/
	export let labelledby: string = '';
	/** Provide an ID of the element describing the drawer.*/
	export let describedby: string = '';

	// Base Classes
	const cBaseBackdrop: string = 'fixed top-0 left-0 right-0 bottom-0 z-40 flex';
	const cBaseDrawer: string = 'shadow-xl overflow-y-auto';

	// Local
	let elemBackdrop: HTMLElement;
	let elemDrawer: HTMLElement;

	function percentage(percent: number, amount: number): number {
		return (amount / 100) * percent;
	}

	// Set Animation Values
	let animParams: any = { backdrop: '', width: '', height: '', x: 0, y: 0 };
	function setAnimParams(): void {
		switch (position) {
			case 'top':
				animParams = {
					backdrop: 'flex-col justify-start',
					width: 'w-full',
					height: 'h-[40%]',
					x: 0,
					y: -percentage(40, window.innerHeight)
				};
				break;
			case 'bottom':
				animParams = { backdrop: 'flex-col justify-end', width: 'w-full', height: 'h-[40%]', x: 0, y: percentage(40, window.innerHeight) };
				break;
			case 'right':
				animParams = { backdrop: 'justify-end', width: 'w-[90%]', height: 'h-full', x: percentage(80, window.innerWidth), y: 0 };
				break;
			// Default: Left
			default:
				animParams = { backdrop: 'justify-start', width: 'w-[90%]', height: 'h-full', x: -percentage(80, window.innerWidth), y: 0 };
				break;
		}
	}

	// Input Handlers
	function onClickBackdrop(e: any): void {
		// Limit to only backdrop element
		if (e.target === elemBackdrop) {
			close();
		}
	}
	function onKeydownWindow(e: any): void {
		if (!$open) return;
		if (e.code === 'Escape') {
			close();
		}
	}

	// Close
	function close(): void {
		open.set(false);
	}

	// Subscribe to $open prop
	open.subscribe((o: boolean) => {
		if (o === true) {
			setAnimParams();
		}
	});

	// Reactive
	$: classesWidth = width ? width : animParams.width;
	$: classesHeight = height ? height : animParams.height;
	$: classesBackdrop = `${cBaseBackdrop} ${animParams.backdrop} ${bgBackdrop} ${blur} ${$$props.class ?? ''}`;
	$: classesDrawer = `${cBaseDrawer} ${classesWidth} ${classesHeight} ${bgDrawer} ${border} ${margin} ${rounded}`;
</script>

<svelte:window on:keydown={onKeydownWindow} />

{#if $open}
	<!-- Backdrop -->
	<div
		bind:this={elemBackdrop}
		class="drawer-backdrop {classesBackdrop}"
		data-testid="drawer-backdrop"
		transition:fade|local={{ duration }}
		on:click={(e) => {
			onClickBackdrop(e);
		}}
		on:keydown
		on:keyup
		on:keypress
		use:focusTrap={true}
	>
		<!-- Drawer -->
		<div
			bind:this={elemDrawer}
			class="drawer {classesDrawer}"
			data-testid="drawer"
			transition:fly|local={{ x: animParams.x, y: animParams.y, duration }}
			role="modal"
			aria-modal="true"
			aria-labelledby={labelledby}
			aria-describedby={describedby}
		>
			<!-- Slot: Default -->
			<slot />
		</div>
	</div>
{/if}
