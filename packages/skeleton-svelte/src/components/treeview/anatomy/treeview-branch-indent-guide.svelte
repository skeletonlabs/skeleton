<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import type { TreeViewBranchIndentGuideProps } from '../modules/types.js';
	import { TreeViewNodeContext, TreeViewRootContext } from '../modules/context.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';

	const nodeContext = TreeViewNodeContext.consume();
	const rootContext = TreeViewRootContext.consume();
	const props: TreeViewBranchIndentGuideProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const nodeState = rootContext.api.getNodeState(nodeContext.nodeProps);

	const translate = $derived(`translate-[${nodeState.depth * 1.5}rem]`);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getBranchIndentGuideProps(nodeContext.nodeProps),
			{
				class: classesTreeview.branchIndentGuide
			},
			{
				class: translate
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
