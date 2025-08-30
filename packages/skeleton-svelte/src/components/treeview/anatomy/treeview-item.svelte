<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { TreeViewNodeContext, TreeViewRootContext } from '../modules/context.js';
	import type { TreeViewItemProps } from '../modules/types.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';

	const nodeContext = TreeViewNodeContext.consume();
	const rootContext = TreeViewRootContext.consume();
	const props: TreeViewItemProps = $props();
	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemProps(nodeContext.nodeProps),
			{
				class: classesTreeview.item
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
