<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TreeViewRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useTreeView>;
	}
</script>

<script lang="ts">
	import { TreeViewRootContext } from '../modules/root-context';
	import { useTreeView } from '../modules/use-tree-view.svelte';
	import { classesTreeView } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: TreeViewRootProviderProps = $props();

	const { element, children, value: treeView, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			treeView().getRootProps(),
			{
				class: classesTreeView.root,
			},
			rest,
		),
	);

	TreeViewRootContext.provide(() => treeView());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
