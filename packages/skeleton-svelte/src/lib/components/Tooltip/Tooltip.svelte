<script lang="ts">
	import { fade } from 'svelte/transition';

	import * as tooltip from '@zag-js/tooltip';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { TooltipProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		open = $bindable(false),
		// Trigger
		triggerBase = '',
		triggerBackground = '',
		triggerClasses = '',
		// Positioner
		positionerBase = '',
		positionerZIndex = '',
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
	}: TooltipProps = $props();

	// Zag
	const [snapshot, send] = useMachine(
		tooltip.machine({
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
	const api = $derived(tooltip.connect(snapshot, send, normalizeProps));
</script>

<span data-testid="tooltip">
	<!-- Snippet: Trigger -->
	<button {...api.getTriggerProps()} class="{triggerBase} {triggerBackground} {triggerClasses}">
		{@render trigger?.()}
	</button>
	<!-- Tooltip Content -->
	{#if api.open}
		<div {...api.getPositionerProps()} transition:fade={{ duration: 100 }} class="{positionerBase} {positionerZIndex} {positionerClasses}">
			<!-- Snippet Content -->
			<div {...api.getContentProps()} class="{contentBase} {contentBackground} {contentClasses}">
				{@render content?.()}
			</div>
		</div>
	{/if}
</span>
