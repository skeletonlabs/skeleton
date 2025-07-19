<script lang="ts">
	import { getTreeContext } from './context.js';
	import TreeNode from './TreeNode.svelte';
	import type { TreeItemProps } from './types.js';

	let { id, value, disabled = false }: TreeItemProps = $props();

	const treeContext = getTreeContext();
</script>

<TreeNode {id} {value} {disabled}>
	{#snippet content({ node, nodeProps })}
		{#if node != null}
			<button
				class="{treeContext.itemBase} {treeContext.itemBackground} {treeContext.itemSpaceY} {treeContext.itemHover} {treeContext.itemBorder} {treeContext.itemPadding} {treeContext.itemShadow} {treeContext.itemClasses}"
				{...treeContext.api?.getItemProps(nodeProps)}
				data-testid="tree-item"
				type="button"
			>
				{#if treeContext.itemIcon}
					<div data-testid="tree-item-icon">
						{@render treeContext.itemIcon()}
					</div>
				{/if}
				<span {...treeContext.api?.getItemTextProps(nodeProps)} data-testid="tree-item-text">
					{node.value}
				</span>
			</button>
		{/if}
	{/snippet}
</TreeNode>
