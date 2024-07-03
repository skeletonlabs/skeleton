<script lang="ts">
	import type { SegmentControl } from './types.js';

	let {
		base = 'inline-flex items-stretch overflow-hidden',
		background = 'preset-outlined-surface-200-800',
		border = 'p-2',
		flexDirection = 'flex-row', // vertical: flex-col
		gap = 'gap-2',
		padding = '',
		rounded = 'rounded-container',
		width = '',
		classes = '',
		// Snippets
		children
	}: SegmentControl = $props();
</script>

<div
	role="radiogroup"
	class="{base} {flexDirection} {background} {border} {padding} {gap} {rounded} {width} {classes}"
	data-testid="segment"
>
	{#if children}{@render children()}{/if}
</div>
