<script lang="ts">
	import { getTreeContext } from './context.js';
	import TreeNode from './TreeNode.svelte';
	import type { TreeItemProps } from './types.js';

	let {
		id,
		value,
		disabled = false,
		// Item
		base = 'flex gap-2',
		background = '',
		selected = 'preset-tonal-primary',
		spaceY = '',
		hover = 'hover:preset-tonal-primary',
		border = 'rounded-base',
		padding = 'p-2',
		shadow = '',
		classes = '',
		// Snippets
		icon
	}: TreeItemProps = $props();

	const treeContext = getTreeContext();
</script>

<!-- @component An Item of a TreeView. -->

<TreeNode {id} {value} {disabled}>
	{#snippet content({ node, nodeProps })}
		{#if node != null}
			<!-- Item -->
			<button
				class="{base} {background} {spaceY} {hover} {border} {padding} {shadow} {classes} {[
					treeContext.api?.selectedValue.includes(id) && selected
				]}"
				{...treeContext.api?.getItemProps(nodeProps)}
				data-testid="tree-item"
				type="button"
			>
				<!-- Icon -->
				{#if icon}
					<div data-testid="tree-item-icon">
						{@render icon()}
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
