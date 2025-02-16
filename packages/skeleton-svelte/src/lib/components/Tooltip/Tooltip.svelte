<script lang="ts">
	import { fade } from 'svelte/transition';

	import * as tooltip from '@zag-js/tooltip';
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import type { TooltipProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		open = $bindable(false),
		disabled = false,
		arrow = false,
		// Base
		base = '',
		classes = '',
		// Trigger
		triggerBase = '',
		triggerBackground = '',
		triggerClasses = '',
		// Positioner
		positionerBase = '',
		zIndex = 'auto',
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
	const [snapshot, send] = useMachine(
		tooltip.machine({
			id: useId(),
			open,
			onOpenChange(details) {
				zagProps.onOpenChange?.(details);
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
	const api = $derived(tooltip.connect(snapshot, send, normalizeProps));
	const triggerProps = $derived(mergeProps(api.getTriggerProps(), { onmouseover, onclick }));
</script>

<span class="{base} {classes}" data-testid="tooltip">
	<!-- Snippet: Trigger -->
	{#if trigger}
		<button {...triggerProps} class="{triggerBase} {triggerBackground} {triggerClasses}" {disabled} type="button">
			{@render trigger?.()}
		</button>
	{/if}
	<!-- Tooltip Content -->
	{#if api.open}
		<div {...api.getPositionerProps()} transition:fade={{ duration: 100 }} class="{positionerBase} {positionerClasses}">
			<!-- Arrow -->
			{#if arrow}
				<div {...api.getArrowProps()}>
					<div {...api.getArrowTipProps()} class="{arrowBase} {arrowBackground} {arrowClasses}"></div>
				</div>
			{/if}
			<!-- Snippet Content -->
			<div {...api.getContentProps()} class="{contentBase} {contentBackground} {contentClasses}" style="z-index: {zIndex};">
				{@render content?.()}
			</div>
		</div>
	{/if}
</span>

<style>
	:global([data-part='arrow']) {
		--arrow-size: 10px;
		--arrow-background: white;
	}
</style>
