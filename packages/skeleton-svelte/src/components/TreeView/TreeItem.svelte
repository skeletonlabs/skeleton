<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getTreeContext } from './context.js';
	import TreeNode from './TreeNode.svelte';

	interface Props {
		id: string;
		value: string;
		disabled?: boolean;
		children?: Snippet;
		// trigger?: import('svelte').Snippet<
		// 	[
		// 		{
		// 			nodeData: any;
		// 		}
		// 	]
		// >;
	}

	let { id, value, disabled = false, children }: Props = $props();

	const treeContext = getTreeContext();
</script>

<TreeNode {id} {value} {disabled}>
	{#snippet content({ node: nodeData, nodeProps })}
		<button
			class="{treeContext.itemBase} {treeContext.itemBackground} {treeContext.itemSpaceY} {treeContext.itemHover} {treeContext.itemBorder} {treeContext.itemPadding} {treeContext.itemShadow} {treeContext.itemClasses}"
			{...treeContext.api?.getItemProps(nodeProps)}
			data-testid="tree-item"
			type="button"
		>
			{nodeData.value}
		</button>
	{/snippet}
</TreeNode>
