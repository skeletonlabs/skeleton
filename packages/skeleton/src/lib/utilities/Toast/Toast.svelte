<script lang="ts" context="module">
	import { fly } from 'svelte/transition';
	import { type Transition, type TransitionParams, type CssClasses, prefersReducedMotionStore } from '../../index.js';
	import { dynamicTransition } from '../../internal/transitions.js';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type FlyTransition = typeof fly;
	type TransitionIn = Transition;
	type TransitionOut = Transition;
</script>

<script lang="ts" generics="TransitionIn extends Transition = FlyTransition, TransitionOut extends Transition = FlyTransition">
	import { flip } from 'svelte/animate';

	// Stores
	import { toastStore } from './stores.js';

	// Props
	/** Set the toast position.
	 * @type {'t' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br'}
	 */
	export let position: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br' = 'b';
	/** Maximum toasts that can show at once. */
	export let max = 3;

	// Props (styles)
	/** Provide classes to set the background color. */
	export let background: CssClasses = 'variant-filled-secondary';
	/** Provide classes to set width styles. */
	export let width: CssClasses = 'max-w-[640px]';
	/** Provide classes to set the text color. */
	export let color: CssClasses = '';
	/** Provide classes to set the padding. */
	export let padding: CssClasses = 'p-4';
	/** Provide classes to set toast horizontal spacing. */
	export let spacing: CssClasses = 'space-x-4';
	/** Provide classes to set the border radius styles. */
	export let rounded: CssClasses = 'rounded-container-token';
	/** Provide classes to set the border box shadow. */
	export let shadow: CssClasses = 'shadow-lg';
	/** Provide a class to override the z-index */
	export let zIndex: CssClasses = 'z-[888]';

	// Props (buttons)
	/** Provide styles for the action button. */
	export let buttonAction: CssClasses = 'btn variant-filled';
	/** Provide styles for the dismiss button. */
	export let buttonDismiss: CssClasses = 'btn-icon btn-icon-sm variant-filled';
	/** The button label text. */
	export let buttonDismissLabel = '✕';

	// Props (transition)
	/**
	 * Enable/Disable transitions
	 * @type {boolean}
	 */
	export let transitions = !$prefersReducedMotionStore;
	/**
	 * Provide the transition to used on entry.
	 * @type {TransitionIn}
	 */
	export let transitionIn: TransitionIn = fly as TransitionIn;
	/**
	 * Transition params provided to `transitionIn`.
	 * @type {TransitionParams}
	 */
	export let transitionInParams: TransitionParams<TransitionIn> = { duration: 250 };
	/**
	 * Provide the transition to used on exit.
	 * @type {TransitionOut}
	 */
	export let transitionOut: TransitionOut = fly as TransitionOut;
	/**
	 * Transition params provided to `transitionOut`.
	 * @type {TransitionParams}
	 */
	export let transitionOutParams: TransitionParams<TransitionOut> = { duration: 250 };

	// Base Classes
	const cWrapper = 'flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none';
	const cSnackbar = 'flex flex-col gap-y-2';
	const cToast = 'flex justify-between items-center pointer-events-auto';
	const cToastActions = 'flex items-center space-x-2';

	// Local
	let cPosition: string;
	let cAlign: string; // items-center
	let animAxis = { x: 0, y: 0 };

	// Set Position
	// prettier-ignore
	switch (position) {
		// Middles
		case('t'): cPosition = 'justify-center items-start'; cAlign = 'items-center'; animAxis = { x: 0, y: -100 }; break;
		case('b'): cPosition = 'justify-center items-end'; cAlign = 'items-center'; animAxis = { x: 0, y: 100 }; break;
		case('l'): cPosition = 'justify-start items-center'; cAlign = 'items-start'; animAxis = { x: -100, y: 0 }; break;
		case('r'): cPosition = 'justify-end items-center'; cAlign = 'items-end'; animAxis = { x: 100, y: 0 }; break;
		// Corners
		case ('tl'): cPosition = 'justify-start items-start'; cAlign = 'items-start'; animAxis = { x: -100, y: 0 }; break;
		case ('tr'): cPosition = 'justify-end items-start'; cAlign = 'items-end'; animAxis = { x: 100, y: 0 }; break;
		case ('bl'): cPosition = 'justify-start items-end'; cAlign = 'items-start'; animAxis = { x: -100, y: 0 }; break;
		case ('br'): cPosition = 'justify-end items-end'; cAlign = 'items-end'; animAxis = { x: 100, y: 0 }; break;
	}

	function onAction(index: number): void {
		$toastStore[index]?.action?.response();
		toastStore.close($toastStore[index].id);
	}

	function onMouseEnter(index: number): void {
		if ($toastStore[index]?.hoverable) {
			toastStore.freeze(index);
			classesSnackbar += ' scale-[105%]';
		}
	}

	function onMouseLeave(index: number): void {
		if ($toastStore[index]?.hoverable) {
			toastStore.unfreeze(index);
			classesSnackbar = classesSnackbar.replace(' scale-[105%]', '');
		}
	}

	// Reactive
	$: classesWrapper = `${cWrapper} ${cPosition} ${zIndex} ${$$props.class || ''}`;
	$: classesSnackbar = `${cSnackbar} ${cAlign} ${padding}`;
	$: classesToast = `${cToast} ${width} ${color} ${padding} ${spacing} ${rounded} ${shadow}`;
	// Filtered Toast Store
	$: filteredToasts = Array.from($toastStore).slice(0, max);
</script>

{#if $toastStore.length}
	<!-- Wrapper -->
	<div class="snackbar-wrapper {classesWrapper}" data-testid="snackbar-wrapper">
		<!-- List -->
		<div class="snackbar {classesSnackbar}">
			{#each filteredToasts as t, i (t)}
				<div
					animate:flip={{ duration: transitions ? 250 : 0 }}
					in:dynamicTransition|global={{
						transition: transitionIn,
						params: { x: animAxis.x, y: animAxis.y, ...transitionInParams },
						enabled: transitions
					}}
					out:dynamicTransition|global={{
						transition: transitionOut,
						params: { x: animAxis.x, y: animAxis.y, ...transitionOutParams },
						enabled: transitions
					}}
					on:mouseenter={() => onMouseEnter(i)}
					on:mouseleave={() => onMouseLeave(i)}
					role={t.hideDismiss ? 'alert' : 'alertdialog'}
					aria-live="polite"
				>
					<!-- Toast -->
					<div class="toast {classesToast} {t.background ?? background} {t.classes ?? ''}" data-testid="toast">
						<div class="text-base">{@html t.message}</div>
						{#if t.action || !t.hideDismiss}
							<div class="toast-actions {cToastActions}">
								{#if t.action}<button class={buttonAction} on:click={() => onAction(i)}>{@html t.action.label}</button>{/if}
								{#if !t.hideDismiss}<button class={buttonDismiss} aria-label="Dismiss toast" on:click={() => toastStore.close(t.id)}
										>{buttonDismissLabel}</button
									>{/if}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
