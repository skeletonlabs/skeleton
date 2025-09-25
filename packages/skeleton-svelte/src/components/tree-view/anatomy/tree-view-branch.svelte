<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { NodeProps } from '@zag-js/tree-view';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface TreeViewBranchProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {
		nodeProps: NodeProps;
	}
</script>

<script lang="ts">
	import { TreeViewNodeContext } from '../modules/tree-view-node-context.js';
	import { TreeViewRootContext } from '../modules/tree-view-root-context.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: TreeViewBranchProps = $props();
	const rootContext = TreeViewRootContext.consume();
	const { nodeProps, element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getBranchProps(nodeProps),
			{
				class: classesTreeview.branch,
			},
			restAttributes,
		),
	);

	TreeViewNodeContext.provide({
		get nodeProps() {
			return nodeProps;
		},
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
