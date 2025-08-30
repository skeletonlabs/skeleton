<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { TreeViewNodeContext, TreeViewRootContext } from '../modules/context.js';
	import type { TreeViewBranchTextProps } from '../modules/types.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';

	const nodeContext = TreeViewNodeContext.consume();
	const rootContext = TreeViewRootContext.consume();
	const props: TreeViewBranchTextProps = $props();
	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(
		mergeProps(
			rootContext.api.getBranchTextProps(nodeContext.nodeProps),
			{
				class: classesTreeview.branchText
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
