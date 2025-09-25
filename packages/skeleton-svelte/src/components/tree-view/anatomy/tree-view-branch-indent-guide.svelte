<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface TreeViewBranchIndentGuideProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { TreeViewNodeContext } from '../modules/tree-view-node-context.js';
	import { TreeViewRootContext } from '../modules/tree-view-root-context.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const nodeContext = TreeViewNodeContext.consume();
	const rootContext = TreeViewRootContext.consume();
	const props: TreeViewBranchIndentGuideProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const nodeState = $derived(rootContext.api.getNodeState(nodeContext.nodeProps));

	const translate = $derived(`translate-[${nodeState.depth * 1.5}rem]`);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getBranchIndentGuideProps(nodeContext.nodeProps),
			{
				class: classesTreeview.branchIndentGuide,
			},
			{
				class: translate,
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
