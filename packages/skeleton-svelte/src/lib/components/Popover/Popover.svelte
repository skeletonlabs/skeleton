<script lang="ts">
	import * as popover from '@zag-js/popover';
	import { portal, useMachine, normalizeProps } from '@zag-js/svelte';
	import type { PopoverProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		// Snippets
		trigger,
		content
	}: PopoverProps = $props();

	// Zag
	const [snapshot, send] = useMachine(popover.machine({ id: useId() }));
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
		<div {...api.getContentProps()}>
			<!-- Arrow -->
			<div {...api.getArrowProps()}>
				<div {...api.getArrowTipProps()}></div>
			</div>
			<!-- Snippet: Content -->
			<div>{@render content?.()}</div>
		</div>
	</div>
</div>

<style>
	/* NOTE: using this temporarily */
	:global([data-part='arrow']) {
		--arrow-background: green;
		--arrow-size: 16px;
	}
</style>
