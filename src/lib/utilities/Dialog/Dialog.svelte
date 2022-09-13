<!-- Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog -->
<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	import Button from '$lib/components/Button/Button.svelte';
	import { dialogStore } from '$lib/utilities/Dialog/stores';

	// Props
	export let backdrop: string = 'bg-surface-400/70 dark:bg-surface-900/70';
	export let blur: string = 'backdrop-blur-none';
	export let card: string = 'bg-surface-50 dark:bg-surface-700';
	export let width: string = 'max-w-[640px]';
	export let duration: number = 100;

	// Local Settings
	let elemModal: HTMLElement;
	let dialogValue: string;

	// Base Classes
	const cBaseBackdrop: string = 'fixed top-0 left-0 right-0 bottom-0 z-[999] flex justify-center items-center p-4 backdrop-blur-sm';
	const cBaseDialog: string = 'p-4 w-full space-y-4 rounded-xl drop-shadow';
	const cBaseHeader: string = 'flex justify-start items-center space-x-4';
	const cBaseIcon: string = 'fill-black dark:fill-white bg-primary-500/20 flex justify-center items-center w-10 mx-auto aspect-square rounded-full';
	const cBaseImage: string = 'w-full h-auto rounded-lg';
	const cBaseFooter: string = 'flex justify-end space-x-4';

	// Set the Result value response based on button selection
	function setResult(v: any): void {
		if ($dialogStore[0].result) {
			$dialogStore[0].result(v);
		}
	}

	// Click Handlers
	function onDialogClose(): void {
		setResult(false);
		dialogStore.close();
	}
	function onDialogConfirmSubmit(): void {
		setResult(true);
		dialogStore.close();
	}
	function onDialogPromptSubmit(): void {
		setResult(dialogValue);
		dialogStore.close();
	}

	// Subscribe to dialog updates
	dialogStore.subscribe((dArr: any) => {
		// Dialog quey updated and includes a value
		if (dArr.length) {
			// Focus on first valid modal element
			setTimeout(() => {
				if (elemModal !== null) {
					const elemWhitelist: string = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
					const focusableElems: any = elemModal.querySelectorAll(elemWhitelist);
					if (focusableElems !== null) {
						focusableElems[0].focus();
					}
				}
			}, 100);
			// firstFooterButton.focus();
			// Set the local dialog value (for prompt)
			dialogValue = dArr[0].value;
		}
	});

	// A11y Input Handler
	function onKeyPress(event: any): void {
		// ESC to close dialog
		if (event.code === 'Escape') {
			onDialogClose();
		}
	}

	// Reactive Classes
	$: classesBackdrop = `${cBaseBackdrop} ${backdrop} ${blur}`;
	$: classesDialog = `${cBaseDialog} ${card} ${width}`;
</script>

{#if $dialogStore.length}
	<!-- Backdrop Shim -->
	<div class="dialog-backdrop {classesBackdrop} {$$props.class || ''}" on:click={onDialogClose} on:keydown={onKeyPress} transition:fade|local={{ duration }} data-testid="dialog-backdrop">
		<!-- Dialog -->
		<div
			bind:this={elemModal}
			class="dialog {classesDialog}"
			on:click|preventDefault|stopPropagation
			transition:scale|local={{ duration, opacity: 0, start: 0.5 }}
			data-testid="dialog"
			role="dialog"
			aria-modal="true"
			aria-label={$dialogStore[0].title}
		>
			<!-- Header -->
			<header class="dialog-header {cBaseHeader}">
				<!-- Icon -->
				{#if $dialogStore[0].icon}
					<div class="dialog-icon {cBaseIcon}">{@html $dialogStore[0].icon}</div>
				{/if}

				<!-- Title -->
				<span class="flex-1 text-xl font-bold">{@html $dialogStore[0].title}</span>
			</header>

			<!-- Content -->
			<section class="dialog-content space-y-4">
				<p class="opacity-60">{@html $dialogStore[0].body}</p>

				<!-- If: image -->
				{#if $dialogStore[0].image}
					<img src={$dialogStore[0].image} class="dialog-image {cBaseImage}" alt="Dialog" loading="lazy" />
				{/if}

				<!-- If: HTML -->
				{#if $dialogStore[0].html}
					{@html $dialogStore[0].html}
				{/if}

				<!-- If: Component -->
				{#if $dialogStore[0].component}
					<svelte:component this={$dialogStore[0].component.element} {...$dialogStore[0].component.props}>
						{@html $dialogStore[0].component.slot}
					</svelte:component>
				{/if}

				<!-- If: Prompt -->
				{#if $dialogStore[0].type === 'prompt'}
					<input type="text" bind:value={dialogValue} placeholder="Enter value..." required />
				{/if}
			</section>

			<!-- Footer -->
			<footer class="dialog-footer {cBaseFooter}">
				<!-- Button: Cancel -->
				<Button variant="ghost" on:click={onDialogClose}>Close</Button>
				<!-- If Confirm - Button: Confirm -->
				{#if $dialogStore[0].type === 'confirm'}<Button variant="filled-primary" on:click={onDialogConfirmSubmit}>Confirm</Button>{/if}
				<!-- If Promopt - Button: Submit -->
				{#if $dialogStore[0].type === 'prompt'}<Button variant="filled-primary" on:click={onDialogPromptSubmit}>Submit</Button>{/if}
			</footer>
		</div>
	</div>
{/if}
