<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { TreeViewNodeContext, TreeViewRootContext } from '../modules/context.js';
	import type { TreeViewBranchContentProps } from '../modules/types.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';

	const nodeContext = TreeViewNodeContext.consume();
	const rootContext = TreeViewRootContext.consume();
	const props: TreeViewBranchContentProps = $props();
	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(
		mergeProps(
			rootContext.api.getBranchContentProps(nodeContext.nodeProps),
			{
				class: classesTreeview.branchContent
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
