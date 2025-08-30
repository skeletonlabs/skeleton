<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { TreeViewNodeContext, TreeViewRootContext } from '../modules/context.js';
	import type { TreeViewBranchProps } from '../modules/types.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';

	const props: TreeViewBranchProps = $props();
	const rootContext = TreeViewRootContext.consume();
	const { nodeProps, element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getBranchProps(nodeProps),
			{
				class: classesTreeview.branch
			},
			restAttributes
		)
	);

	TreeViewNodeContext.provide({
		get nodeProps() {
			return nodeProps;
		}
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
