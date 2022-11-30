<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	// Actions
	import { focusTrap } from '$lib/actions/FocusTrap/focusTrap';

	// Drawer Utils
	import type { DrawerSettings } from '$lib/utilities/Drawer/types';
	import { drawerStore } from '$lib/utilities/Drawer/stores';

	// Props
	/** Set the anchor position.
	 * @type {'left' | 'top' | 'right' | 'bottom'}
	 */
	export let position: string = 'left';
	/** Define the Svelte transition animation duration.*/
	export let duration = 150;

	// Props (backdrop)
	/** Backdrop - Provide classes to set the backdrop background color*/
	export let bgBackdrop = 'bg-backdrop-token';
	/** Backdrop - Provide classes to set the blur style.*/
	export let blur = 'backdrop-blur-xs';

	// Props (drawer)
	/** Drawer - Provide classes to set the drawer background color.*/
	export let bgDrawer = 'bg-surface-100-800-token';
	/** Drawer - Provide classes to set border color.*/
	export let border = '';
	/** Drawer - Provide classes to set border radius.*/
	export let rounded = '';
	/** Drawer - Provide classes to override the width.*/
	export let width = '';
	/** Drawer - Provide classes to override the height.*/
	export let height = '';
	/** Drawer - Provide classes to set margins.*/
	export let margin = '';

	// Props (a11y)
	/** Provide an ID of the element labeling the drawer.*/
	export let labelledby = '';
	/** Provide an ID of the element describing the drawer.*/
	export let describedby = '';

	// Base Classes
	const cBaseBackdrop = 'fixed top-0 left-0 right-0 bottom-0 z-40 flex';
	const cBaseDrawer = 'shadow-xl overflow-y-auto';

	// Local
	let elemBackdrop: HTMLElement;
	let elemDrawer: HTMLElement;
	let windowSettings = { width: 0, height: 0 };
	let styleSettings: Record<string, string> = { backdrop: '', width: '', height: '' };
	let animSettings: Record<string, number> = { x: 0, y: 0 };

	// Listen to drawerStore updates
	drawerStore.subscribe((settings: DrawerSettings) => {
		if (settings.open === false) return;
		applySettingOverrides(settings);
		applyPositionSettings();
	});

	// Override local props with passed settings.
	// NOTE: these must stay in sync with the component props
	function applySettingOverrides(settings: DrawerSettings): void {
		if (settings.position) position = settings.position;
		if (settings.duration) duration = settings.duration;
		// Backdrop
		if (settings.bgBackdrop) bgBackdrop = settings.bgBackdrop;
		if (settings.blur) blur = settings.blur;
		// Drawer
		if (settings.bgDrawer) bgDrawer = settings.bgDrawer;
		if (settings.border) border = settings.border;
		if (settings.rounded) rounded = settings.rounded;
		if (settings.width) width = settings.width;
		if (settings.height) height = settings.height;
		if (settings.margin) margin = settings.margin;
		// A11y
		if (settings.labelledby) labelledby = settings.labelledby;
		if (settings.describedby) describedby = settings.describedby;
	}

	// Apply one of the four position styles and animation transition settings
	function applyPositionSettings(): void {
		switch (position) {
			case 'top':
				styleSettings = { backdrop: 'flex-col justify-start', width: 'w-full', height: 'h-[40%]' };
				animSettings = { x: 0, y: -percentage(40, windowSettings.height) };
				break;
			case 'bottom':
				styleSettings = { backdrop: 'flex-col justify-end', width: 'w-full', height: 'h-[40%]' };
				animSettings = { x: 0, y: percentage(40, windowSettings.height) };
				break;
			case 'right':
				styleSettings = { backdrop: 'justify-end', width: 'w-[90%]', height: 'h-full' };
				animSettings = { x: percentage(90, windowSettings.width), y: 0 };
				break;
			default: // left
				styleSettings = { backdrop: 'justify-start', width: 'w-[90%]', height: 'h-full' };
				animSettings = { x: -percentage(90, windowSettings.width), y: 0 };
				break;
		}
	}

	function percentage(percent: number, amount: number): number {
		return (amount / 100) * percent;
	}

	// Input Handlers
	function onClickBackdrop(e: any): void {
		if (e.target === elemBackdrop) close();
	}
	function onKeydownWindow(e: any): void {
		if (!$drawerStore) return;
		if (e.code === 'Escape') close();
	}

	// Close
	function close(): void {
		drawerStore.close();
	}

	// Lifecycle
	onMount(() => {
		windowSettings.width = window.innerWidth;
		windowSettings.height = window.innerHeight;
	});

	// Reactive
	$: classesWidth = width ? width : styleSettings.width;
	$: classesHeight = height ? height : styleSettings.height;
	$: classesBackdrop = `${cBaseBackdrop} ${styleSettings.backdrop} ${bgBackdrop} ${blur} ${$$props.class ?? ''}`;
	$: classesDrawer = `${cBaseDrawer} ${classesWidth} ${classesHeight} ${bgDrawer} ${border} ${margin} ${rounded}`;
</script>

<svelte:window on:keydown={onKeydownWindow} />

{#if $drawerStore.open === true}
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
			transition:fly|local={{ x: animSettings.x, y: animSettings.y, duration }}
			role="dialog"
			aria-modal="true"
			aria-labelledby={labelledby}
			aria-describedby={describedby}
		>
			<!-- Slot: Default -->
			<slot />
		</div>
	</div>
{/if}
