<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import type { TreeViewTreeProps } from '../modules/types.js';
	import { TreeViewRootContext } from '../modules/context.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';

	const props: TreeViewTreeProps = $props();
	const rootContext = TreeViewRootContext.consume();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getTreeProps(),
			{
				class: classesTreeview.tree
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
