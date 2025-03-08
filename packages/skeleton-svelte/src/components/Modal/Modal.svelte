<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import * as dialog from '@zag-js/dialog';
	import { portal, normalizeProps, useMachine, mergeProps } from '@zag-js/svelte';
	import type { ModalProps } from './types.js';

	const {
		// Base
		base = '',
		classes = '',
		zIndex = 'auto',
		// Trigger
		triggerBase = '',
		triggerBackground = '',
		triggerClasses = '',
		triggerAriaLabel = '',
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
		// Events
		onclick,
		// Zag ---
		...zagProps
	}: ModalProps = $props();

	// Zag
	const id = $props.id();
	const service = useMachine(dialog.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(dialog.connect(service, normalizeProps));
	const triggerProps = $derived(mergeProps(api.getTriggerProps(), { onclick }));
</script>

<span class="{base} {classes}" data-testid="modal">
	<!-- Trigger -->
	{#if trigger}
		<button {...triggerProps} class="{triggerBase} {triggerBackground} {triggerClasses}" type="button" aria-label={triggerAriaLabel}>
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
			<div {...api.getContentProps()} class="{contentBase} {contentBackground} {contentClasses}" style="z-index: {zIndex};">
				{@render content?.()}
			</div>
		</div>
	{/if}
</span>
