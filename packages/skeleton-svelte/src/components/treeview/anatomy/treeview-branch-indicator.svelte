<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { TreeViewNodeContext, TreeViewRootContext } from '../modules/context.js';
	import type { TreeViewBranchIndicatorProps, TreeViewLabelProps } from '../modules/types.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';

	const nodeContext = TreeViewNodeContext.consume();
	const rootContext = TreeViewRootContext.consume();
	const props: TreeViewBranchIndicatorProps = $props();
	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(
		mergeProps(
			rootContext.api.getBranchIndicatorProps(nodeContext.nodeProps),
			{
				class: classesTreeview.branchIndicator
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
