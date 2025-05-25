<script lang="ts">
	import { fade } from 'svelte/transition';

	import * as tooltip from '@zag-js/tooltip';
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import type { TooltipProps } from './types.js';

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
		arrowBackground = '!bg-white',
		arrowClasses = '',
		// Snippets
		trigger,
		content,
		// Events
		onmouseover,
		onclick,
		// Zag ---
		...zagProps
	}: TooltipProps = $props();

	// Zag
	const id = $props.id();
	const service = useMachine(tooltip.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(tooltip.connect(service, normalizeProps));
	const triggerProps = $derived(mergeProps(api.getTriggerProps(), { onmouseover, onclick }));
</script>

<span class="{base} {classes}" data-testid="tooltip">
	<!-- Snippet: Trigger -->
	{#if trigger}
		<button {...triggerProps} class="{triggerBase} {triggerBackground} {triggerClasses}" type="button" aria-label={triggerAriaLabel}>
			{@render trigger()}
		</button>
	{/if}
	<!-- Tooltip Content -->
	<div {...api.getPositionerProps()} class="{positionerBase} {positionerClasses}">
		<!-- Popover -->
		{#if api.open}
			<div {...api.getContentProps()} transition:fade={{ duration: 100 }} style="z-index: {zIndex};">
				<!-- Arrow -->
				{#if arrow}
					<div {...api.getArrowProps()}>
						<div {...api.getArrowTipProps()} class="{arrowBase} {arrowBackground} {arrowClasses}"></div>
					</div>
				{/if}
				<!-- Snippet Content -->
				<div class="{contentBase} {contentBackground} {contentClasses}">
					{@render content?.()}
				</div>
			</div>
		{/if}
	</div>
</span>

<style>
	:global([data-part='arrow']) {
		--arrow-size: 10px;
		--arrow-background: white;
	}
</style>
