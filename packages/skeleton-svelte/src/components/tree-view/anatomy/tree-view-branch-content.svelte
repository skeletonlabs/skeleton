<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface TreeViewBranchContentProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { TreeViewNodeContext } from '../modules/tree-view-node-context.js';
	import { TreeViewRootContext } from '../modules/tree-view-root-context.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const nodeContext = TreeViewNodeContext.consume();
	const rootContext = TreeViewRootContext.consume();
	const props: TreeViewBranchContentProps = $props();
	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(
		mergeProps(
			rootContext.api.getBranchContentProps(nodeContext.nodeProps),
			{
				class: classesTreeview.branchContent,
			},
			restAttributes,
		),
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
