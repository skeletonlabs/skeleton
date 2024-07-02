<script lang="ts">
	import type { SegmentControlProps } from './types.js';

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
	}: SegmentControlProps = $props();
</script>

<div role="radiogroup" class="{base} {flexDirection} {background} {border} {padding} {gap} {rounded} {width} {classes}">
	{#if children}{@render children()}{/if}
</div>
