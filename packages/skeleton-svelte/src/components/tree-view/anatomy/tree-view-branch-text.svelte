<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface TreeViewBranchTextProps extends PropsWithElement, HTMLAttributes<HTMLSpanElement> {}
</script>

<script lang="ts">
	import { TreeViewNodeContext } from '../modules/tree-view-node-context.js';
	import { TreeViewRootContext } from '../modules/tree-view-root-context.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const nodeContext = TreeViewNodeContext.consume();
	const rootContext = TreeViewRootContext.consume();
	const props: TreeViewBranchTextProps = $props();
	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(
		mergeProps(
			rootContext.api.getBranchTextProps(nodeContext.nodeProps),
			{
				class: classesTreeview.branchText,
			},
			restAttributes,
		),
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
