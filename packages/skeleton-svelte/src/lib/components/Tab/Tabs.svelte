<script lang="ts">
	import type { TabsProps } from './types.js';

	let {
		// Root
		base = 'w-full',
		spaceY = 'space-y-4',
		classes = '',
		// Tab List
		listBase = 'flex overflow-x-auto hide-scrollbar',
		listGap = 'gap-4',
		listJustify = 'justify-start',
		listBorder = 'border-b border-surface-200-800',
		listClasses = '',
		// Snippets
		list,
		panels
	}: TabsProps = $props();
</script>

<!-- @component A Tab parent component. -->

<div class="{base} {spaceY} {classes}" data-testid="tabs">
	{#if list}
		<div class="{listBase} {listGap} {listJustify} {listBorder} {listClasses}" role="tablist">
			{@render list()}
		</div>
	{/if}
	{#if panels}
		{@render panels()}
	{/if}
</div>
