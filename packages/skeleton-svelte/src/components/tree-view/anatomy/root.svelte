<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import { splitProps, type Props } from '@zag-js/tree-view';

	export interface TreeViewRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { TreeViewRootContext } from '../modules/root-context';
	import { useTreeView } from '../modules/use-tree-view.svelte';
	import { classesTreeView } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: TreeViewRootProps = $props();

	const [treeViewProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const treeView = useTreeView(() => ({
		id: id,
		...treeViewProps,
	}));

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
