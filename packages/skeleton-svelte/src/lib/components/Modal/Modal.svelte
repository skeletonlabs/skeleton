<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import * as dialog from '@zag-js/dialog';
	import { portal, normalizeProps, useMachine } from '@zag-js/svelte';
	import type { ModalProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		open = $bindable(false),
		// Trigger
		triggerBase = '',
		triggerBackground = '',
		triggerClasses = '',
		// Backdrop
		backdropBase = 'fixed top-0 left-0 right-0 bottom-0 z-[998]',
		backdropBackground = 'bg-surface-50/75 dark:bg-surface-950/75',
		backdropClasses = '',
		// Positioner
		positionerBase = 'fixed top-0 left-0 right-0 bottom-0 z-[999]',
		positionerDisplay = 'flex',
		positionerJustify = 'justify-center',
		positionerAlign = 'items-center',
		positionerPadding = 'p-4',
		positionerClasses = '',
		// Content
		contentBase = '',
		contentBackground = '',
		contentClasses = '',
		// Transitions
		transitionsBackdropIn = { duration: 100 },
		transitionsBackdropOut = { duration: 100 },
		transitionsPositionerIn = { y: 50, duration: 200 },
		transitionsPositionerOut = { y: 50, duration: 200 },
		// Snippets
		trigger,
		content,
		// Zag ---
		...zagProps
	}: ModalProps = $props();

	// Zag
	const [snapshot, send] = useMachine(
		dialog.machine({
			id: useId(),
			open
		}),
		{
			context: {
				...zagProps,
				onOpenChange(details) {
					zagProps.onOpenChange?.(details);
					open = details.open;
				},
				get open() {
					return $state.snapshot(open);
				}
			}
		}
	);
	const api = $derived(dialog.connect(snapshot, send, normalizeProps));
</script>

<span data-testid="modal">
	<!-- Trigger -->
	{#if trigger}
		<button {...api.getTriggerProps()} class="{triggerBase} {triggerBackground} {triggerClasses}">
			{@render trigger()}
		</button>
	{/if}
	{#if api.open}
		<!-- Backdrop -->
		<div
			use:portal
			{...api.getBackdropProps()}
			class="{backdropBase} {backdropBackground} {backdropClasses}"
			in:fade={transitionsBackdropIn}
			out:fade={transitionsBackdropOut}
		></div>
		<!-- Positioner -->
		<div
			use:portal
			{...api.getPositionerProps()}
			class="{positionerBase} {positionerDisplay} {positionerJustify} {positionerAlign} {positionerPadding} {positionerClasses}"
			in:fly={transitionsPositionerIn}
			out:fly={transitionsPositionerOut}
		>
			<!-- Content -->
			<div {...api.getContentProps()} class="{contentBase} {contentBackground} {contentClasses}">
				{@render content?.()}
			</div>
		</div>
	{/if}
</span>
