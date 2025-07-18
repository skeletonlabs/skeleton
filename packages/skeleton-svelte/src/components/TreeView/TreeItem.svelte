<script lang="ts">
	import * as tree from '@zag-js/tree-view';
	import type { Snippet } from 'svelte';
	import { getTreeContext } from './context.js';
	import TreeNode from './TreeNode.svelte';
	import { normalizeProps } from '@zag-js/svelte';
	import type { TreeItemProps } from './types.js';

	let { id, value, disabled = false, children }: TreeItemProps = $props();

	const treeContext = getTreeContext();
</script>

<!-- {disabled} -->
<TreeNode {id} {value}>
	{#snippet content({ node, nodeProps })}
		{#if node != null}
			<button
				class="{treeContext.itemBase} {treeContext.itemBackground} {treeContext.itemSpaceY} {treeContext.itemHover} {treeContext.itemBorder} {treeContext.itemPadding} {treeContext.itemShadow} {treeContext.itemClasses}"
				{...treeContext.api?.getItemProps(nodeProps)}
				data-testid="tree-item"
				type="button"
			>
				{node.value}
			</button>
		{/if}
	{/snippet}
</TreeNode>
