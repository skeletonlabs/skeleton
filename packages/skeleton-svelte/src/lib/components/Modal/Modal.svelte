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
			open,
			onOpenChange(details) {
				open = details.open;
			}
		}),
		{
			context: {
				...zagProps,
				get open() {
					return $state.snapshot(open);
				}
			}
		}
	);
	const api = $derived(dialog.connect(snapshot, send, normalizeProps));
</script>

<span>
	<!-- Trigger -->
	<button {...api.getTriggerProps()} class="{triggerBase} {triggerBackground} {triggerClasses}">
		{@render trigger?.()}
	</button>
	{#if api.open}
		<!-- Backdrop -->
		<div
			use:portal
			{...api.getBackdropProps()}
			class="{backdropBase} {backdropBackground} {backdropClasses}"
			transition:fade={{ duration: 100 }}
		></div>
		<!-- Positioner -->
		<div
			use:portal
			{...api.getPositionerProps()}
			class="{positionerBase} {positionerDisplay} {positionerJustify} {positionerAlign} {positionerPadding} {positionerClasses}"
			in:fly={{ y: 50, duration: 200 }}
			out:fly={{ y: 50, duration: 200 }}
		>
			<!-- Content -->
			<div {...api.getContentProps()} class="{contentBase} {contentBackground} {contentClasses}">
				{@render content?.()}
			</div>
		</div>
	{/if}
</span>
