<script lang="ts" module>
	import type { NodeProps } from '@zag-js/tree-view';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element.js';

	export interface TreeViewItemProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {
		nodeProps: NodeProps;
	}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { TreeViewRootContext } from '../modules/tree-view-root-context.js';
	import { TreeViewNodeContext } from '../modules/tree-view-node-context.js';
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
