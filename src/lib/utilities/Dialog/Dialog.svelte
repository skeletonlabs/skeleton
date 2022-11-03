<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	// Actions
	import { focusTrap } from '$lib/actions/FocusTrap/focusTrap';

	// Stores
	import { dialogStore } from '$lib/utilities/Dialog/stores';

	// Props
	/** The open/close animation duration. Set '0' (zero) to disable. */
	export let duration: number = 150;

	// Props (dialog)
	/** Provide classes to style the dialog background. */
	export let background: string = 'bg-surface-100-800-token';
	/** Provide classes to style the dialog width. */
	export let width: string = 'w-full max-w-[640px]';
	/** Provide classes to style the dialog. */
	export let height: string = 'h-auto';
	/** Provide classes to style the dialog padding. */
	export let padding: string = 'p-4';
	/** Provide classes to style the dialog spacing. */
	export let spacing: string = 'space-y-4';
	/** Provide classes to style the dialog border radius. */
	export let rounded: string = 'rounded-container-token';
	/** Provide classes to style dialog box shadow. */
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
	/** Provide arbitrary classes to dialog header region. */
	export let regionHeader: string = 'text-2xl font-bold';
	/** Provide arbitrary classes to dialog body region. */
	export let regionBody: string = 'max-h-[200px] overflow-hidden';
	/** Provide arbitrary classes to dialog footer region. */
	export let regionFooter: string = 'flex justify-end space-x-2';

	// Base Styles
	const cBackdrop: string = 'fixed top-0 left-0 right-0 bottom-0 z-[999] flex justify-center items-center p-4';
	const cDialogImage: string = 'w-full h-auto';

	// Local
	let promptValue: any;

	// Dialog Store Subscription
	dialogStore.subscribe((dArr: any[]) => {
		if (!dArr.length) return;
		// Set the local dialog value (for prompt)
		promptValue = dArr[0].value;
	});

	// Event Handlers ---

	function onBackdropClick(e: any): void {
		if (e.target.classList.contains('dialog-backdrop')) onClose();
	}

	function onClose(): void {
		if ($dialogStore[0].response) $dialogStore[0].response(false);
		dialogStore.close();
	}

	function onConfirm(): void {
		if ($dialogStore[0].response) $dialogStore[0].response(true);
		dialogStore.close();
	}

	function onPromptSubmit(): void {
		if ($dialogStore[0].response) $dialogStore[0].response(promptValue);
		dialogStore.close();
	}

	// A11y ---

	function onKeyDown(event: any): void {
		if (!$dialogStore.length) return;
		if (event.code === 'Escape') onClose();
	}

	// Reactive
	$: classesBackdrop = `${cBackdrop} ${regionBackdrop} ${$$props.class || ''}`;
	$: classesDialog = `${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow}`;
	// IMPORTANT: add values to pass to the children templates.
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

{#if $dialogStore.length > 0}
	<!-- <pre>{JSON.stringify($dialogStore, null, 2)}</pre> -->
	<div class="dialog-backdrop {classesBackdrop}" on:click={onBackdropClick} on:keydown={() => {}} transition:fade|local={{ duration }}>
		<!-- Modal -->
		<!-- prettier-ignore -->
		<div 
			class="dialog {classesDialog} {$dialogStore[0].classes}"
			transition:fly|local={{ duration, opacity: 0, y: 100 }}
			use:focusTrap={true}
		>
			<!-- Header -->
			{#if $dialogStore[0]?.title}
				<header class="dialog-header {regionHeader}">{@html $dialogStore[0].title}</header>
			{/if}
			<!-- Body -->
			{#if $dialogStore[0]?.body}
				<article class="dialog-body {regionBody}">{@html $dialogStore[0].body}</article>
			{/if}
			<!-- Image -->
			{#if $dialogStore[0]?.image}
				<img class="dialog-image {cDialogImage}" src={$dialogStore[0]?.image} alt="Dialog" />
			{/if}
			<!-- Type -->
			{#if $dialogStore[0].type === 'alert'}
				<!-- Template: Alert -->
				<footer class="dialog-footer {regionFooter}">
					<!-- prettier-ignore -->
					<button class="btn {buttonNeutral}" on:click={onClose}>{buttonTextCancel}</button>
				</footer>
			{:else if $dialogStore[0].type === 'confirm'}
				<!-- Template: Confirm -->
				<!-- prettier-ignore -->
				<footer class="dialog-footer {regionFooter}">
					<button class="btn {buttonNeutral}" on:click={onClose}>{buttonTextCancel}</button>
					<button class="btn {buttonPositive}" on:click={onConfirm}>{buttonTextConfirm}</button>
				</footer>
			{:else if $dialogStore[0].type === 'prompt'}
				<!-- Template: Prompt -->
				<input class="dialog-prompt-input" type="text" bind:value={promptValue} required />
				<!-- prettier-ignore -->
				<footer class="dialog-footer {regionFooter}">
					<button class="btn {buttonNeutral}" on:click={onClose}>{buttonTextCancel}</button>
					<button class="btn {buttonPositive}" on:click={onPromptSubmit}>{buttonTextSubmit}</button>
				</footer>
			{:else if $dialogStore[0].type === 'component'}
				<!-- Template: Component -->
				<!-- NOTE: users are repsonsible for handling all UI, including cancel/submit buttons -->
				<svelte:component this={$dialogStore[0].component.ref} {...$dialogStore[0].component.props} {parent}>
					{@html $dialogStore[0].component.slot}
				</svelte:component>
			{/if}
		</div>
	</div>
{/if}
