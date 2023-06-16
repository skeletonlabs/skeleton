<script lang="ts" context="module">
	import { fly, fade } from 'svelte/transition';
	import { type Transition, type TransitionParams, prefersReducedMotionStore } from '../../index.js';
	import { dynamicTransition } from '../../internal/transitions.js';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type FlyTransition = typeof fly;
	type DrawerTransitionIn = Transition;
	type DrawerTransitionOut = Transition;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type FadeTransition = typeof fade;
	type BackdropTransitionIn = Transition;
	type BackdropTransitionOut = Transition;
</script>

<script
	lang="ts"
	generics="DrawerTransitionIn extends Transition = FlyTransition, DrawerTransitionOut extends Transition = FlyTransition, BackdropTransitionIn extends Transition = FadeTransition, BackdropTransitionOut extends Transition = FadeTransition"
>
	import { createEventDispatcher } from 'svelte';
	import { BROWSER } from 'esm-env';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Types
	import type { CssClasses } from '../../index.js';

	// Actions
	import { focusTrap } from '../../actions/FocusTrap/focusTrap.js';

	// Drawer Utils
	import type { DrawerSettings } from './types.js';
	import { drawerStore } from './stores.js';

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
	/**
	 * Provide the transition used in drawer on entry.
	 * @type {DrawerTransitionIn}
	 */
	export let drawerTransitionIn: DrawerTransitionIn = fly as DrawerTransitionIn;
	/**
	 * Transition params provided to `DrawerTransitionIn`.
	 * @type {TransitionParams}
	 */
	export let drawerTransitionInParams: TransitionParams<DrawerTransitionIn> = { duration: 150 };
	/**
	 * Provide the transition used in drawer on exit.
	 * @type {DrawerTransitionOut}
	 */
	export let drawerTransitionOut: DrawerTransitionOut = fly as DrawerTransitionOut;
	/**
	 * Transition params provided to `DrawerTransitionOut`.
	 * @type {TransitionParams}
	 */
	export let drawerTransitionOutParams: TransitionParams<DrawerTransitionOut> = { duration: 150 };
	/**
	 * Provide the transition used in backdrop on entry.
	 * @type {BackdropTransitionIn}
	 */
	export let backdropTransitionIn: BackdropTransitionIn = fade as BackdropTransitionIn;
	/**
	 * Transition params provided to `BackdropTransitionIn`.
	 * @type {TransitionParams}
	 */
	export let backdropTransitionInParams: TransitionParams<BackdropTransitionIn> = { duration: 150 };
	/**
	 * Provide the transition used in backdrop on exit.
	 * @type {BackdropTransitionOut}
	 */
	export let backdropTransitionOut: BackdropTransitionOut = fade as BackdropTransitionOut;
	/**
	 * Transition params provided to `BackdropTransitionOut`.
	 * @type {TransitionParams}
	 */
	export let backdropTransitionOutParams: TransitionParams<BackdropTransitionOut> = { duration: 150 };

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
		width, height,
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
	function onDrawerInteraction(event: MouseEvent): void {
		if (event.target === elemBackdrop) {
			drawerStore.close();
			/** @event {{ event }} backdrop - Fires on backdrop interaction.  */
			dispatch('backdrop', event);
		} else {
			/** @event {{ event }} drawer - Fires on drawer interaction. */
			dispatch('drawer', event);
		}
	}
	function onKeydownWindow(event: KeyboardEvent): void {
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
	<div
		bind:this={elemBackdrop}
		class="drawer-backdrop {classesBackdrop}"
		data-testid="drawer-backdrop"
		on:mousedown={onDrawerInteraction}
		on:touchstart
		on:touchend
		on:keypress
		in:dynamicTransition|local={{ transition: backdropTransitionIn, params: backdropTransitionInParams, enabled: transitions }}
		out:dynamicTransition|local={{ transition: backdropTransitionOut, params: backdropTransitionOutParams, enabled: transitions }}
		use:focusTrap={true}
	>
		<!-- Drawer -->
		<div
			bind:this={elemDrawer}
			class="drawer {classesDrawer}"
			data-testid="drawer"
			role="dialog"
			aria-modal="true"
			aria-labelledby={labelledby}
			aria-describedby={describedby}
			in:dynamicTransition|local={{
				transition: drawerTransitionIn,
				params: { x: anim.x, y: anim.y, ...drawerTransitionInParams },
				enabled: transitions
			}}
			out:dynamicTransition|local={{
				transition: drawerTransitionOut,
				params: { x: anim.x, y: anim.y, ...drawerTransitionOutParams },
				enabled: transitions
			}}
		>
			<!-- Slot: Default -->
			<slot />
		</div>
	</div>
{/if}
