<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	// Actions
	import { focusTrap } from '$lib/actions/FocusTrap/focusTrap';

	// Stores
	import { modalStore } from '$lib/utilities/Modal/stores';

	// Props
	/** The open/close animation duration. Set '0' (zero) to disable. */
	export let duration: number = 150;

	// Props (modal)
	/** Provide classes to style the modal background. */
	export let background: string = 'bg-surface-100-800-token';
	/** Provide classes to style the modal width. */
	export let width: string = 'w-full max-w-[640px]';
	/** Provide classes to style the modal. */
	export let height: string = 'h-auto';
	/** Provide classes to style the modal padding. */
	export let padding: string = 'p-4';
	/** Provide classes to style the modal spacing. */
	export let spacing: string = 'space-y-4';
	/** Provide classes to style the modal border radius. */
	export let rounded: string = 'rounded-container-token';
	/** Provide classes to style modal box shadow. */
	export let shadow: string = 'shadow-xl';

	// Props (buttons)
	/** Provide classes for neutral buttons, such as Cancel. */
	export let buttonNeutral: string = 'btn-ghost-surface';
	/** Provide classes for positive actions, such as Confirm or Submit. */
	export let buttonPositive: string = 'btn-filled-primary';
	/** Override the text for the Cancel button. */
	export let buttonTextCancel: string = 'Cancel';
	/** Override the text for the Confirm button. */
	export let buttonTextConfirm: string = 'Confirm';
	/** Override the text for the Submit button. */
	export let buttonTextSubmit: string = 'Submit';

	// Props (regions)
	/** Provide classes to style the backdrop. */
	export let regionBackdrop: string = 'bg-backdrop-token';
	/** Provide arbitrary classes to modal header region. */
	export let regionHeader: string = 'text-2xl font-bold';
	/** Provide arbitrary classes to modal body region. */
	export let regionBody: string = 'max-h-[200px] overflow-hidden';
	/** Provide arbitrary classes to modal footer region. */
	export let regionFooter: string = 'flex justify-end space-x-2';

	// Base Styles
	const cBackdrop: string = 'fixed top-0 left-0 right-0 bottom-0 z-[999] flex justify-center items-center p-4';
	const cModalImage: string = 'w-full h-auto';

	// Local
	let promptValue: any;

	// Modal Store Subscription
	modalStore.subscribe((dArr: any[]) => {
		if (!dArr.length) return;
		// Set the local modal value (for prompt)
		promptValue = dArr[0].value;
	});

	// Event Handlers ---

	function onBackdropClick(e: MouseEvent): void {
		if (!(e.target instanceof Element)) return;
		if (e.target.classList.contains('modal-backdrop')) onClose();
	}

	function onClose(): void {
		if ($modalStore[0].response) $modalStore[0].response(false);
		modalStore.close();
	}

	function onConfirm(): void {
		if ($modalStore[0].response) $modalStore[0].response(true);
		modalStore.close();
	}

	function onPromptSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(promptValue);
		modalStore.close();
	}

	// A11y ---

	function onKeyDown(event: KeyboardEvent): void {
		if (!$modalStore.length) return;
		if (event.code === 'Escape') onClose();
	}

	// Reactive
	$: classesBackdrop = `${cBackdrop} ${regionBackdrop} ${$$props.class || ''}`;
	$: classesModal = `${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow}`;
	// IMPORTANT: add values to pass to the children templates.
	// There is a way to self-reference component values, but it involes svelte-internal and is not yet stable.
	// REPL: https://svelte.dev/repl/badd0f11aa99450ca69dca6690d4d5a4?version=3.52.0
	// Source: https://discord.com/channels/457912077277855764/1037768846855118909
	$: parent = {
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
			on:click={onBackdropClick}
			on:keydown
			transition:fade={{ duration }}
			data-testid="modal-backdrop"
		>
			<!-- Modal -->
			<div
				class="modal {classesModal} {$modalStore[0].classes}"
				transition:fly={{ duration, opacity: 0, y: 100 }}
				use:focusTrap={true}
				data-testid="modal"
				role="modal"
				aria-modal="true"
				aria-label={$modalStore[0].title}
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
				{#if $modalStore[0]?.image}
					<img class="modal-image {cModalImage}" src={$modalStore[0]?.image} alt="Modal" />
				{/if}
				<!-- Type -->
				{#if $modalStore[0].type === 'alert'}
					<!-- Template: Alert -->
					<footer class="modal-footer {regionFooter}">
						<!-- prettier-ignore -->
						<button class="btn {buttonNeutral}" on:click={onClose}>{buttonTextCancel}</button>
					</footer>
				{:else if $modalStore[0].type === 'confirm'}
					<!-- Template: Confirm -->
					<!-- prettier-ignore -->
					<footer class="modal-footer {regionFooter}">
					<button class="btn {buttonNeutral}" on:click={onClose}>{buttonTextCancel}</button>
					<button class="btn {buttonPositive}" on:click={onConfirm}>{buttonTextConfirm}</button>
				</footer>
				{:else if $modalStore[0].type === 'prompt'}
					<!-- Template: Prompt -->
					<input class="modal-prompt-input" type="text" bind:value={promptValue} required />
					<!-- prettier-ignore -->
					<footer class="modal-footer {regionFooter}">
					<button class="btn {buttonNeutral}" on:click={onClose}>{buttonTextCancel}</button>
					<button class="btn {buttonPositive}" on:click={onPromptSubmit}>{buttonTextSubmit}</button>
				</footer>
				{:else if $modalStore[0].type === 'component'}
					<!-- Template: Component -->
					<!-- NOTE: users are repsonsible for handling all UI, including cancel/submit buttons -->
					<svelte:component this={$modalStore[0].component.ref} {...$modalStore[0].component.props} {parent}>
						{@html $modalStore[0].component.slot}
					</svelte:component>
				{/if}
			</div>
		</div>
	{/key}
{/if}
