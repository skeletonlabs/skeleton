<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TreeViewBranchIndicatorProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { TreeViewNodeContext } from '../modules/node-context';
	import { TreeViewRootContext } from '../modules/root-context';
	import { classesTreeView } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: TreeViewBranchIndicatorProps = $props();

	const treeView = TreeViewRootContext.consume();
	const nodeProps = TreeViewNodeContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			treeView().getBranchIndicatorProps(nodeProps()),
			{
				class: classesTreeView.branchIndicator,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
