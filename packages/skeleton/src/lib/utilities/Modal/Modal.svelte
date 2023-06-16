<script lang="ts" context="module">
	import { fly, fade } from 'svelte/transition';
	import { type Transition, type TransitionParams, prefersReducedMotionStore } from '../../index.js';
	import { dynamicTransition } from '../../internal/transitions.js';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type FlyTransition = typeof fly;
	type ModalTransitionIn = Transition;
	type ModalTransitionOut = Transition;
	type ModalContentTransitionIn = Transition;
	type ModalContentTransitionOut = Transition;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type FadeTransition = typeof fade;
	type BackdropTransitionIn = Transition;
	type BackdropTransitionOut = Transition;
</script>

<script
	lang="ts"
	generics="ModalTransitionIn extends Transition = FlyTransition, ModalTransitionOut extends Transition = FlyTransition, ModalContentTransitionIn extends Transition = FlyTransition, ModalContentTransitionOut extends Transition = FlyTransition, BackdropTransitionIn extends Transition = FadeTransition, BackdropTransitionOut extends Transition = FadeTransition"
>
	import { createEventDispatcher } from 'svelte';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Types
	import type { CssClasses } from '../../index.js';

	import { modalStore } from './stores.js';
	import { focusTrap } from '../../actions/FocusTrap/focusTrap.js';
	import type { ModalComponent, ModalSettings } from './types.js';

	// Props
	/** Set the modal position within the backdrop container */
	export let position: CssClasses = 'items-center';

	// Props (components)
	/** Register a list of reusable component modals. */
	export let components: Record<string, ModalComponent> = {};

	// Props (transitions)
	/** The open/close animation duration. Set '0' (zero) to disable. */
	export let duration = 150;
	/** Set the fly transition opacity. */
	export let flyOpacity = 0;
	/** Set the fly transition X axis value. */
	export let flyX = 0;
	/** Set the fly transition Y axis value. */
	export let flyY = 100;

	// Props (modal)
	/** Provide classes to style the modal background. */
	export let background: CssClasses = 'bg-surface-100-800-token';
	/** Provide classes to style the modal width. */
	export let width: CssClasses = 'w-modal';
	/** Provide classes to style the modal height. */
	export let height: CssClasses = 'h-auto';
	/** Provide classes to style the modal padding. */
	export let padding: CssClasses = 'p-4';
	/** Provide classes to style the modal spacing. */
	export let spacing: CssClasses = 'space-y-4';
	/** Provide classes to style the modal border radius. */
	export let rounded: CssClasses = 'rounded-container-token';
	/** Provide classes to style modal box shadow. */
	export let shadow: CssClasses = 'shadow-xl';
	/** Provide a class to override the z-index */
	export let zIndex: CssClasses = 'z-[999]';

	// Props (buttons)
	/** Provide classes for neutral buttons, such as Cancel. */
	export let buttonNeutral: CssClasses = 'variant-ghost-surface';
	/** Provide classes for positive actions, such as Confirm or Submit. */
	export let buttonPositive: CssClasses = 'variant-filled';
	/** Override the text for the Cancel button. */
	export let buttonTextCancel: CssClasses = 'Cancel';
	/** Override the text for the Confirm button. */
	export let buttonTextConfirm: CssClasses = 'Confirm';
	/** Override the text for the Submit button. */
	export let buttonTextSubmit: CssClasses = 'Submit';

	// Props (regions)
	/** Provide classes to style the backdrop. */
	export let regionBackdrop: CssClasses = 'bg-surface-backdrop-token';
	/** Provide arbitrary classes to modal header region. */
	export let regionHeader: CssClasses = 'text-2xl font-bold';
	/** Provide arbitrary classes to modal body region. */
	export let regionBody: CssClasses = 'max-h-[200px] overflow-hidden';
	/** Provide arbitrary classes to modal footer region. */
	export let regionFooter: CssClasses = 'flex justify-end space-x-2';

	// Props (transition)
	/**
	 * Enable/Disable transitions
	 * @type {boolean}
	 */
	export let transitions = !$prefersReducedMotionStore;
	/**
	 * Provide the transition used in modal on entry.
	 * @type {ModalTransitionIn}
	 */
	export let modalTransitionIn: ModalTransitionIn = fly as ModalTransitionIn;
	/**
	 * Transition params provided to `ModalTransitionIn`.
	 * @type {TransitionParams}
	 */
	export let modalTransitionInParams: TransitionParams<ModalTransitionIn> = { duration: 150, opacity: 0, x: 0, y: 100 };
	/**
	 * Provide the transition used in modal on exit.
	 * @type {ModalTransitionOut}
	 */
	export let modalTransitionOut: ModalTransitionOut = fly as ModalTransitionOut;
	/**
	 * Transition params provided to `ModalTransitionOut`.
	 * @type {TransitionParams}
	 */
	export let modalTransitionOutParams: TransitionParams<ModalTransitionOut> = { duration: 150, opacity: 0, x: 0, y: 100 };
	/**
	 * Provide the transition used in modal content on entry.
	 * @type {ModalContentTransitionIn}
	 */
	export let modalContentTransitionIn: ModalContentTransitionIn = fly as ModalContentTransitionIn;
	/**
	 * Transition params provided to `ModalContentTransitionIn`.
	 * @type {TransitionParams}
	 */
	export let modalContentTransitionInParams: TransitionParams<ModalContentTransitionIn> = { duration: 150, opacity: 0, y: 100 };
	/**
	 * Provide the transition used in modal content on exit.
	 * @type {ModalContentTransitionOut}
	 */
	export let modalContentTransitionOut: ModalContentTransitionOut = fly as ModalContentTransitionOut;
	/**
	 * Transition params provided to `ModalContentTransitionOut`.
	 * @type {TransitionParams}
	 */
	export let modalContentTransitionOutParams: TransitionParams<ModalContentTransitionOut> = { duration: 150, opacity: 0, y: 100 };
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

	// Base Styles
	const cBackdrop = 'fixed top-0 left-0 right-0 bottom-0';
	const cTransitionLayer = 'w-full h-full p-4 overflow-y-auto flex justify-center';
	const cModal = 'block'; // max-h-full overflow-y-auto overflow-x-hidden
	const cModalImage = 'w-full h-auto';

	// Local
	let promptValue: any;
	const buttonTextDefaults: Record<string, string> = {
		buttonTextCancel,
		buttonTextConfirm,
		buttonTextSubmit
	};
	let currentComponent: ModalComponent | undefined;
	let registeredInteractionWithBackdrop = false;

	// Modal Store Subscription
	modalStore.subscribe((modals: ModalSettings[]) => {
		if (!modals.length) return;
		// Set Prompt input value and type
		if (modals[0].type === 'prompt') promptValue = modals[0].value;
		// Override button text per instance, if available
		buttonTextCancel = modals[0].buttonTextCancel || buttonTextDefaults.buttonTextCancel;
		buttonTextConfirm = modals[0].buttonTextConfirm || buttonTextDefaults.buttonTextConfirm;
		buttonTextSubmit = modals[0].buttonTextSubmit || buttonTextDefaults.buttonTextSubmit;
		// Set Active Component
		currentComponent = typeof modals[0].component === 'string' ? components[modals[0].component] : modals[0].component;
	});

	// Event Handlers ---
	function onBackdropInteractionBegin(event: MouseEvent): void {
		if (!(event.target instanceof Element)) return;
		const classList = event.target.classList;
		if (classList.contains('modal-backdrop') || classList.contains('modal-transition')) {
			registeredInteractionWithBackdrop = true;
		}
	}
	function onBackdropInteractionEnd(event: MouseEvent): void {
		if (!(event.target instanceof Element)) return;
		const classList = event.target.classList;
		if ((classList.contains('modal-backdrop') || classList.contains('modal-transition')) && registeredInteractionWithBackdrop) {
			// We return `undefined` to differentiate from the cancel button
			if ($modalStore[0].response) $modalStore[0].response(undefined);
			modalStore.close();
			/** @event {{ event }} backdrop - Fires on backdrop interaction.  */
			dispatch('backdrop', event);
		}
		registeredInteractionWithBackdrop = false;
	}

	function onClose(): void {
		if ($modalStore[0].response) $modalStore[0].response(false);
		modalStore.close();
	}

	function onConfirm(): void {
		if ($modalStore[0].response) $modalStore[0].response(true);
		modalStore.close();
	}

	function onPromptSubmit(event: SubmitEvent): void {
		event.preventDefault();
		if ($modalStore[0].response) $modalStore[0].response(promptValue);
		modalStore.close();
	}

	// A11y ---

	function onKeyDown(event: KeyboardEvent): void {
		if (!$modalStore.length) return;
		if (event.code === 'Escape') onClose();
	}

	// State
	$: cPosition = $modalStore[0]?.position ?? position;
	// Reactive
	$: classesBackdrop = `${cBackdrop} ${regionBackdrop} ${zIndex} ${$$props.class ?? ''} ${$modalStore[0]?.backdropClasses ?? ''}`;
	$: classesTransitionLayer = `${cTransitionLayer} ${cPosition ?? ''}`;
	$: classesModal = `${cModal} ${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow} ${
		$modalStore[0]?.modalClasses ?? ''
	}`;
	// IMPORTANT: add values to pass to the children templates.
	// There is a way to self-reference component values, but it involves svelte-internal and is not yet stable.
	// REPL: https://svelte.dev/repl/badd0f11aa99450ca69dca6690d4d5a4?version=3.52.0
	// Source: https://discord.com/channels/457912077277855764/1037768846855118909
	$: parent = {
		position,
		// ---
		duration,
		flyOpacity,
		flyX,
		flyY,
		// ---
		background,
		width,
		height,
		padding,
		spacing,
		rounded,
		shadow,
		// ---
		buttonNeutral,
		buttonPositive,
		buttonTextCancel,
		buttonTextConfirm,
		buttonTextSubmit,
		// ---
		regionBackdrop,
		regionHeader,
		regionBody,
		regionFooter,
		// ---
		onClose
	};
</script>

<svelte:window on:keydown={onKeyDown} />

{#if $modalStore.length > 0}
	{#key $modalStore}
		<!-- Backdrop -->
		<div
			class="modal-backdrop {classesBackdrop}"
			data-testid="modal-backdrop"
			on:mousedown={onBackdropInteractionBegin}
			on:mouseup={onBackdropInteractionEnd}
			on:touchstart
			on:touchend
			in:dynamicTransition|local={{ transition: backdropTransitionIn, params: backdropTransitionInParams, enabled: transitions }}
			out:dynamicTransition|local={{ transition: backdropTransitionOut, params: backdropTransitionOutParams, enabled: transitions }}
			use:focusTrap={true}
		>
			<!-- Transition Layer -->
			<div
				class="modal-transition {classesTransitionLayer}"
				in:dynamicTransition|local={{ transition: modalTransitionIn, params: modalTransitionInParams, enabled: transitions }}
				out:dynamicTransition|local={{ transition: modalTransitionOut, params: modalTransitionOutParams, enabled: transitions }}
			>
				{#if $modalStore[0].type !== 'component'}
					<!-- Modal: Presets -->
					<div
						class="modal {classesModal}"
						data-testid="modal"
						role="dialog"
						aria-modal="true"
						aria-label={$modalStore[0].title ?? ''}
						in:dynamicTransition|local={{
							transition: modalContentTransitionIn,
							params: modalContentTransitionInParams,
							enabled: transitions
						}}
						out:dynamicTransition|local={{
							transition: modalContentTransitionOut,
							params: modalContentTransitionOutParams,
							enabled: transitions
						}}
					>
						<!-- Header -->
						{#if $modalStore[0]?.title}
							<header class="modal-header {regionHeader}">{@html $modalStore[0].title}</header>
						{/if}
						<!-- Body -->
						{#if $modalStore[0]?.body}
							<article class="modal-body {regionBody}">{@html $modalStore[0].body}</article>
						{/if}
						<!-- Image -->
						{#if $modalStore[0]?.image && typeof $modalStore[0]?.image === 'string'}
							<img class="modal-image {cModalImage}" src={$modalStore[0]?.image} alt="Modal" />
						{/if}
						<!-- Type -->
						{#if $modalStore[0].type === 'alert'}
							<!-- Template: Alert -->
							<footer class="modal-footer {regionFooter}">
								<button type="button" class="btn {buttonNeutral}" on:click={onClose}>{buttonTextCancel}</button>
							</footer>
						{:else if $modalStore[0].type === 'confirm'}
							<!-- Template: Confirm -->
							<footer class="modal-footer {regionFooter}">
								<button type="button" class="btn {buttonNeutral}" on:click={onClose}>{buttonTextCancel}</button>
								<button type="button" class="btn {buttonPositive}" on:click={onConfirm}>{buttonTextConfirm}</button>
							</footer>
						{:else if $modalStore[0].type === 'prompt'}
							<!-- Template: Prompt -->
							<form class="space-y-4" on:submit={onPromptSubmit}>
								<input class="modal-prompt-input input" name="prompt" type="text" bind:value={promptValue} {...$modalStore[0].valueAttr} />
								<footer class="modal-footer {regionFooter}">
									<button type="button" class="btn {buttonNeutral}" on:click={onClose}>{buttonTextCancel}</button>
									<button type="submit" class="btn {buttonPositive}">{buttonTextSubmit}</button>
								</footer>
							</form>
						{/if}
					</div>
				{:else}
					<!-- Modal: Components -->
					<!-- Note: keep `contents` class to allow widths from children -->
					<div
						class="modal contents {$modalStore[0]?.modalClasses ?? ''}"
						data-testid="modal-component"
						role="dialog"
						aria-modal="true"
						aria-label={$modalStore[0].title ?? ''}
					>
						<svelte:component this={currentComponent?.ref} {...currentComponent?.props} {parent}>
							{#if currentComponent?.slot}
								{@html currentComponent?.slot}
							{/if}
						</svelte:component>
					</div>
				{/if}
			</div>
		</div>
	{/key}
{/if}
