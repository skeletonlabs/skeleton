<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TreeViewBranchContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { TreeViewNodeContext } from '../modules/node-context';
	import { TreeViewRootContext } from '../modules/root-context';
	import { classesTreeView } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: TreeViewBranchContentProps = $props();

	const treeView = TreeViewRootContext.consume();
	const nodeProps = TreeViewNodeContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			treeView().getBranchContentProps(nodeProps()),
			{
				class: classesTreeView.branchContent,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
