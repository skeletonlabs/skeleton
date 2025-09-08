<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element.js';

	export interface TreeViewBranchControlProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { TreeViewRootContext } from '../modules/tree-view-root-context.js';
	import { TreeViewNodeContext } from '../modules/tree-view-node-context.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';

	const props: TreeViewBranchControlProps = $props();
	const nodeContext = TreeViewNodeContext.consume();
	const rootContext = TreeViewRootContext.consume();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getBranchControlProps(nodeContext.nodeProps),
			{
				class: classesTreeview.branchControl
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
