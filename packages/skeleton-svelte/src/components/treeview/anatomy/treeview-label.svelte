<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import type { TreeViewLabelProps } from '../modules/types.js';
	import { TreeViewRootContext } from '../modules/context.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';

	const props: TreeViewLabelProps = $props();
	const rootContext = TreeViewRootContext.consume();
	const { level = 3, element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getLabelProps(),
			{
				class: classesTreeview.label
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<svelte:element this={`h${level}`} {...attributes}>
		{@render children?.()}
	</svelte:element>
{/if}
