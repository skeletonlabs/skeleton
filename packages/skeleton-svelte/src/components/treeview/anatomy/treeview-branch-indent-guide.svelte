<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface TreeViewBranchIndentGuideProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { TreeViewRootContext } from '../modules/treeview-root-context.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';
	import { TreeViewNodeContext } from '../modules/treeview-node-context.js';

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
