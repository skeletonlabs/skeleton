<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { BROWSER } from 'esm-env';

	// Event Dispatcher
	type DrawerEvent = {
		backdrop: MouseEvent;
		drawer: MouseEvent;
	};
	const dispatch = createEventDispatcher<DrawerEvent>();

	// Types
	import { type CssClasses, type SvelteEvent, prefersReducedMotionStore } from '../../index.js';

	// Actions
	import { focusTrap } from '../../actions/FocusTrap/focusTrap.js';

	// Drawer Utils
	import type { DrawerSettings } from './types.js';
	import { getDrawerStore } from './stores.js';
	import { fade, fly } from 'svelte/transition';
	import { dynamicTransition } from '../../internal/transitions.js';

	// Props
	/** Set the anchor position.
	 * @type {'left' | 'top' | 'right' | 'bottom'}
	 */
	export let position: 'left' | 'top' | 'right' | 'bottom' = 'left';

	// Props (backdrop)
	/** Backdrop - Provide classes to set the backdrop background color */
	export let bgBackdrop: CssClasses = 'bg-surface-backdrop-token';
	/** Backdrop - Provide classes to set the blur style. */
	export let blur: CssClasses = '';
	/** Backdrop - Provide classes to set padding. */
	export let padding: CssClasses = '';

	// Props (drawer)
	/** Drawer - Provide classes to set the drawer background color. */
	export let bgDrawer: CssClasses = 'bg-surface-100-800-token';
	/** Drawer - Provide classes to set border color. */
	export let border: CssClasses = '';
	/** Drawer - Provide classes to set border radius. */
	export let rounded: CssClasses = '';
	/** Drawer - Provide classes to set the box shadow. */
	export let shadow: CssClasses = 'shadow-xl';
	/** Drawer - Provide classes to override the width. */
	export let width: CssClasses = '';
	/** Drawer - Provide classes to override the height. */
	export let height: CssClasses = '';
	/** Provide a class to override the z-index */
	export let zIndex: CssClasses = 'z-40';

	// Props (regions)
	/** Provide arbitrary classes to the backdrop region. */
	export let regionBackdrop: CssClasses = '';
	/** Provide arbitrary classes to the drawer region. */
	export let regionDrawer: CssClasses = '';

	// Props (a11y)
	/** Provide an ID of the element labeling the drawer. */
	export let labelledby = '';
	/** Provide an ID of the element describing the drawer. */
	export let describedby = '';

	// Props (transition)
	/**
	 * Enable/Disable transitions
	 * @type {boolean}
	 */
	export let transitions = !$prefersReducedMotionStore;
	/** Drawer - Enable/Disable opacity transition */
	export let opacityTransition = true;

	// Presets
	// prettier-ignore
	const presets = {
		top: { alignment: 'items-start', width: 'w-full', height: 'h-[50%]', rounded: 'rounded-bl-container-token rounded-br-container-token' },
		bottom: { alignment: 'items-end', width: 'w-full', height: ' h-[50%]', rounded: 'rounded-tl-container-token rounded-tr-container-token' },
		left: { alignment: 'justify-start', width: 'w-[90%]', height: 'h-full', rounded: 'rounded-tr-container-token rounded-br-container-token' },
		right: { alignment: 'justify-end', width: 'w-[90%]', height: 'h-full', rounded: 'rounded-tl-container-token rounded-bl-container-token' }
	};

	// Local
	let elemBackdrop: HTMLElement;
	let elemDrawer: HTMLElement;
	let anim = { x: 0, y: 0 };
	const drawerStore = getDrawerStore();

	// Classes
	const cBackdrop = 'fixed top-0 left-0 right-0 bottom-0 flex';
	const cDrawer = 'overflow-y-auto transition-transform';

	// Record a record of default props on init
	// NOTE: these must stay in sync with the props implemented above.
	// prettier-ignore
	const propDefaults = {
		position,
		bgBackdrop, blur, padding,
		bgDrawer, border, rounded, shadow,
		width, height, opacityTransition,
		labelledby, describedby,
		regionBackdrop, regionDrawer
	};

	// Override provided props, else restore prop defaults
	// NOTE: these must stay in sync with the props implemented above.
	function applyPropSettings(settings: DrawerSettings): void {
		position = settings.position || propDefaults.position;
		// Backdrop
		bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop;
		blur = settings.blur || propDefaults.blur;
		padding = settings.padding || propDefaults.padding;
		// Drawer
		bgDrawer = settings.bgDrawer || propDefaults.bgDrawer;
		border = settings.border || propDefaults.border;
		rounded = settings.rounded || propDefaults.rounded;
		shadow = settings.shadow || propDefaults.shadow;
		width = settings.width || propDefaults.width;
		height = settings.height || propDefaults.height;
		opacityTransition = settings.opacityTransition || propDefaults.opacityTransition;
		// Regions
		regionBackdrop = settings.regionBackdrop || propDefaults.regionBackdrop;
		regionDrawer = settings.regionDrawer || propDefaults.regionDrawer;
		// A11y
		labelledby = settings.labelledby || propDefaults.labelledby;
		describedby = settings.describedby || propDefaults.describedby;
	}

	function applyAnimationSettings(): void {
		if (!BROWSER) return;
		// prettier-ignore
		switch (position) {
			case 'top':    anim = { x: 0, y: -window.innerWidth }; break;
			case 'bottom': anim = { x: 0, y: window.innerWidth }; break;
			case 'left':   anim = { x: -window.innerHeight, y: 0 }; break;
			case 'right':  anim = { x: window.innerHeight, y: 0 }; break;
			default: console.error('Error: unknown position property value.'); break;
		}
	}

	// Input Handlers
	function onDrawerInteraction(event: SvelteEvent<MouseEvent, HTMLDivElement>): void {
		if (event.target === elemBackdrop) {
			drawerStore.close();
			/** @event {{ event }} backdrop - Fires on backdrop interaction.  */
			dispatch('backdrop', event);
		} else {
			/** @event {{ event }} drawer - Fires on drawer interaction. */
			dispatch('drawer', event);
		}
	}
	function onKeydownWindow(event: SvelteEvent<KeyboardEvent, Window>): void {
		if (!$drawerStore) return;
		if (event.code === 'Escape') drawerStore.close();
	}

	// Drawer Subscription
	drawerStore.subscribe((settings: DrawerSettings) => {
		if (settings.open !== true) return;
		applyPropSettings(settings);
		applyAnimationSettings();
	});

	// Dynamic Styles
	$: classesPosition = presets[position].alignment;
	$: classesWidth = width ? width : presets[position].width;
	$: classesHeight = height ? height : presets[position].height;
	$: classesRounded = rounded ? rounded : presets[position].rounded;
	// Reactive
	$: classesBackdrop = `${cBackdrop} ${bgBackdrop} ${padding} ${blur} ${classesPosition} ${regionBackdrop} ${zIndex} ${
		$$props.class ?? ''
	}`;
	$: classesDrawer = `${cDrawer} ${bgDrawer} ${border} ${rounded} ${shadow} ${classesWidth} ${classesHeight} ${classesRounded} ${regionDrawer}`;
</script>

<svelte:window on:keydown={onKeydownWindow} />

{#if $drawerStore.open === true}
	<!-- Backdrop -->
	<!-- FIXME: resolve a11y warnings -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		bind:this={elemBackdrop}
		class="drawer-backdrop {classesBackdrop}"
		data-testid="drawer-backdrop"
		on:mousedown={onDrawerInteraction}
		on:touchstart
		on:touchend
		on:keypress
		in:dynamicTransition|local={{
			transition: fade,
			params: { duration: 150 },
			enabled: transitions && opacityTransition
		}}
		out:dynamicTransition|local={{
			transition: fade,
			params: { duration: 150 },
			enabled: transitions && opacityTransition
		}}
		use:focusTrap={true}
	>
		<!-- Drawer -->
		<!-- separate In/Out so anim values update -->
		<div
			bind:this={elemDrawer}
			class="drawer {classesDrawer}"
			data-testid="drawer"
			role="dialog"
			aria-modal="true"
			aria-labelledby={labelledby}
			aria-describedby={describedby}
			in:dynamicTransition|local={{
				transition: fly,
				params: { x: anim.x, y: anim.y, duration: 150, opacity: opacityTransition ? undefined : 1 },
				enabled: transitions
			}}
			out:dynamicTransition|local={{
				transition: fly,
				params: { x: anim.x, y: anim.y, duration: 150, opacity: opacityTransition ? undefined : 1 },
				enabled: transitions
			}}
		>
			<!-- Slot: Default -->
			<slot />
		</div>
	</div>
{/if}
