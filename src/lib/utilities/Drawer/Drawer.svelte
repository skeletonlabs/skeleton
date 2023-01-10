<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher, onMount } from 'svelte';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Actions
	import { focusTrap } from '$lib/actions/FocusTrap/focusTrap';

	// Drawer Utils
	import type { DrawerSettings } from '$lib/utilities/Drawer/types';
	import { drawerStore } from '$lib/utilities/Drawer/stores';

	// Props
	/** Set the anchor position.
	 * @type {'left' | 'top' | 'right' | 'bottom'}
	 */
	export let position: 'left' | 'top' | 'right' | 'bottom' = 'left';
	/** Define the Svelte transition animation duration. */
	export let duration = 150;

	// Props (backdrop)
	/** Backdrop - Provide classes to set the backdrop background color */
	export let bgBackdrop = 'bg-surface-backdrop-token';
	/** Backdrop - Provide classes to set the blur style. */
	export let blur = 'backdrop-blur-xs';

	// Props (drawer)
	/** Drawer - Provide classes to set the drawer background color. */
	export let bgDrawer = 'bg-surface-100-800-token';
	/** Drawer - Provide classes to set border color. */
	export let border = '';
	/** Drawer - Provide classes to set border radius. */
	export let rounded = '';
	/** Drawer - Provide classes to override the width. */
	export let width = '';
	/** Drawer - Provide classes to override the height. */
	export let height = '';
	/** Drawer - Provide classes to set margins. */
	export let margin = '';

	// Props (a11y)
	/** Provide an ID of the element labeling the drawer. */
	export let labelledby = '';
	/** Provide an ID of the element describing the drawer. */
	export let describedby = '';

	// Base Classes
	const cBaseBackdrop = 'fixed top-0 left-0 right-0 bottom-0 z-40 flex';
	const cBaseDrawer = 'shadow-xl overflow-y-auto';

	// Local
	let elemBackdrop: HTMLElement;
	let windowSettings = { width: 1920, height: 1080 };
	let styleSettings = { backdrop: '', width: '', height: '' };
	let animSettings = { x: 0, y: 0 };

	// Record a record of default props on init
	// NOTE: these must stay in sync with the props implemented above.
	// prettier-ignore
	const propDefaults = {
		position, duration,
		bgBackdrop, blur,
		bgDrawer, border, rounded, width, height, margin,
		labelledby, describedby
	};

	// Listen to drawerStore updates
	drawerStore.subscribe((settings) => {
		if (settings.open === false) return;
		applySettings(settings);
		setPosition();
	});

	// Override provided props, else restore prop defaults
	// NOTE: these must stay in sync with the props implemented above.
	function applySettings(settings: DrawerSettings): void {
		position = settings.position || propDefaults.position;
		duration = settings.duration || propDefaults.duration;
		// Backdrop
		bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop;
		blur = settings.blur || propDefaults.blur;
		// Drawer
		bgDrawer = settings.bgDrawer || propDefaults.bgDrawer;
		border = settings.border || propDefaults.border;
		rounded = settings.rounded || propDefaults.rounded;
		width = settings.width || propDefaults.width;
		height = settings.height || propDefaults.height;
		margin = settings.margin || propDefaults.margin;
		// A11y
		labelledby = settings.labelledby || propDefaults.labelledby;
		describedby = settings.describedby || propDefaults.describedby;
	}

	function setPosition(): void {
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
	function onBackdropInteraction(event: any): void {
		if (event.target === elemBackdrop) drawerStore.close();
		/** @event {{ event }} backdrop - Fires on backdrop interaction.  */
		dispatch('backdrop', event);
	}
	function onKeydownWindow(event: any): void {
		if (!$drawerStore) return;
		if (event.code === 'Escape') drawerStore.close();
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
		on:mousedown={onBackdropInteraction}
		on:touchstart={onBackdropInteraction}
		on:keypress
		use:focusTrap={true}
	>
		<!-- Drawer -->
		<div
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
