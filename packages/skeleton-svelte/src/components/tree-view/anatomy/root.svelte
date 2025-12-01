<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import { splitProps, type Props, type TreeNode } from '@zag-js/tree-view';

	export interface TreeViewRootProps<T extends TreeNode = TreeNode>
		extends Omit<Props<T>, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts" generics="T extends TreeNode = TreeNode">
	import { useTreeView } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: TreeViewRootProps<T> = $props();

	const [treeViewProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const treeView = useTreeView(() => ({
		...treeViewProps,
		id: id,
	}));

	const attributes = $derived(mergeProps(treeView().getRootProps(), rest));

	RootContext.provide(() => treeView());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
