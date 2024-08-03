<script lang="ts">
	import { getRatingContext } from './context.js';
	import type { RatingItemProps } from './types.js';

	// Props
	let { base, classes, iconEmpty, iconHalf, iconFull, ...zagProps }: RatingItemProps = $props();

	// Context
	const ctx = getRatingContext();

	// State
	const state = $derived(ctx.api.getItemState(zagProps));
</script>

<span class="{base} {classes}" {...ctx.api.getItemProps(zagProps)}>
	{#if !state.highlighted}
		{@render iconEmpty?.()}
	{:else if state.half}
		{@render iconHalf?.()}
	{:else}
		{@render iconFull?.()}
	{/if}
</span>
