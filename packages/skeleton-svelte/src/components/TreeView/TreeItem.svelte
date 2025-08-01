<script lang="ts">
	import { getTreeContext } from './context.js';
	import TreeNode from './TreeNode.svelte';
	import type { TreeItemProps } from './types.js';

	let { id, value, disabled = false }: TreeItemProps = $props();

	const treeContext = getTreeContext();
</script>

<!-- @component An Item of a TreeView. -->

<TreeNode {id} {value} {disabled}>
	{#snippet content({ node, nodeProps })}
		{#if node != null}
			<!-- Item -->
			<button
				class="{treeContext.itemBase} {treeContext.itemBackground} {treeContext.itemSpaceY} {treeContext.itemHover} {treeContext.itemBorder} {treeContext.itemPadding} {treeContext.itemShadow} {treeContext.itemClasses}"
				{...treeContext.api?.getItemProps(nodeProps)}
				data-testid="tree-item"
				type="button"
			>
				<!-- Icon -->
				{#if treeContext.itemIcon}
					<div data-testid="tree-item-icon">
						{@render treeContext.itemIcon()}
					</div>
				{/if}
				<!-- Text -->
				<span {...treeContext.api?.getItemTextProps(nodeProps)} data-testid="tree-item-text">
					{node.value}
				</span>
			</button>
		{/if}
	{/snippet}
</TreeNode>
