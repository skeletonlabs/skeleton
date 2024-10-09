<script lang="ts">
	import { fade } from 'svelte/transition';

	import * as popover from '@zag-js/popover';
	import { portal, useMachine, normalizeProps } from '@zag-js/svelte';
	import type { PopoverProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		open = $bindable(false),
		arrow = false,
		// Arrow
		arrowBase = '',
		arrowBackground = '',
		arrowClasses = '',
		// Snippets
		trigger,
		content,
		// Zag ---
		...zagProps
	}: PopoverProps = $props();

	// Zag
	const [snapshot, send] = useMachine(
		popover.machine({
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
	const api = $derived(popover.connect(snapshot, send, normalizeProps));
</script>

<div>
	<!-- Snippet: Trigger -->
	<button {...api.getTriggerProps()}>
		{@render trigger?.()}
	</button>
	<!-- Portal -->
	<div use:portal={{ disabled: !api.portalled }} {...api.getPositionerProps()}>
		<!-- Popover -->
		{#if api.open}
			<div {...api.getContentProps()} transition:fade={{ duration: 100 }}>
				<!-- Arrow -->
				{#if arrow}
					<div {...api.getArrowProps()}>
						<div {...api.getArrowTipProps()} class="{arrowBase} {arrowBackground} {arrowClasses}"></div>
					</div>
				{/if}
				<!-- Snippet: Content -->
				<div>{@render content?.()}</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* NOTE: using this temporarily */
	:global([data-part='arrow']) {
		/* --arrow-background: green; */
		--arrow-size: 10px;
	}
</style>
