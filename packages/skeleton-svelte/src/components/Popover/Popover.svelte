<script lang="ts">
	import { fade } from 'svelte/transition';

	import * as popover from '@zag-js/popover';
	import { portal, useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import type { PopoverProps } from './types.js';

	const {
		arrow = false,
		zIndex = 'auto',
		// Base
		base = '',
		classes = '',
		// Trigger
		triggerBase = '',
		triggerBackground = '',
		triggerClasses = '',
		triggerAriaLabel = '',
		// Positioner
		positionerBase = '',
		positionerClasses = '',
		// Content
		contentBase = '',
		contentBackground = '',
		contentClasses = '',
		// Arrow
		arrowBase = '',
		arrowBackground = '!bg-surface-200 dark:!bg-surface-800',
		arrowClasses = '',
		// Snippets
		trigger,
		content,
		// Events
		onclick,
		// Zag ---
		...zagProps
	}: PopoverProps = $props();

	// Zag
	const id = $props.id();
	const service = useMachine(popover.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(popover.connect(service, normalizeProps));
	const triggerProps = $derived(mergeProps(api.getTriggerProps(), { onclick }));
</script>

<span class="{base} {classes}" data-testid="popover">
	<!-- Snippet: Trigger -->
	{#if trigger}
		<button {...triggerProps} class="{triggerBase} {triggerBackground} {triggerClasses}" type="button" aria-label={triggerAriaLabel}>
			{@render trigger()}
		</button>
	{/if}
	<!-- Portal -->
	<div use:portal={{ disabled: !api.portalled }} {...api.getPositionerProps()} class="{positionerBase} {positionerClasses}">
		<!-- Popover -->
		{#if api.open}
			<div {...api.getContentProps()} transition:fade={{ duration: 100 }} style="z-index: {zIndex};">
				<!-- Arrow -->
				{#if arrow}
					<div {...api.getArrowProps()}>
						<div {...api.getArrowTipProps()} class="{arrowBase} {arrowBackground} {arrowClasses}"></div>
					</div>
				{/if}
				<!-- Snippet: Content -->
				<div class="{contentBase} {contentBackground} {contentClasses}">{@render content?.()}</div>
			</div>
		{/if}
	</div>
</span>

<style>
	:global([data-part='arrow']) {
		--arrow-size: 10px;
	}
</style>
