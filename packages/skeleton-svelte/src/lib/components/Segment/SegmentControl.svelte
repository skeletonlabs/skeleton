<script lang="ts">
	import type { SegmentControlProps } from './types.js';

	let {
		base = 'btn-group',
		display = 'inline-flex',
		background = 'preset-outlined-surface-200-800',
		classes = '',
		// Snippets
		children
	}: SegmentControlProps = $props();
</script>

<div role="radiogroup" class="{base} {display} {background} {classes}">
	{#if children}{@render children()}{/if}
</div>
