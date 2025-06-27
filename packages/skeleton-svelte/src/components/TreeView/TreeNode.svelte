<script lang="ts">
	import * as tree from '@zag-js/tree-view';
	import { getTreeViewContext } from './context.js';
	import TreeNode from './TreeNode.svelte';
	import type { Node } from './types.js';

	const { node, indexPath, api }: TreeNodeProps = $props();

	const nodeProps = { indexPath, node };

	interface TreeNodeProps {
		node: Node;
		indexPath: number[];
		api: ReturnType<typeof tree.connect>;
	}

	// Context
	const ctx = getTreeViewContext();

	const nodeState = ctx.api.getNodeState(nodeProps);
</script>

{#if nodeState.isBranch}
	<div {...api.getBranchProps(nodeProps)}>
		<div {...api.getBranchControlProps(nodeProps)}>
			📁
			<span {...api.getBranchTextProps(nodeProps)}>{node.name}</span>
			<span {...api.getBranchIndicatorProps(nodeProps)}> ➡️ </span>
		</div>
		<div {...api.getBranchContentProps(nodeProps)}>
			<div {...api.getBranchIndentGuideProps(nodeProps)}></div>
			{#if node.children}
				{#each node.children as childNode, index}
					<TreeNode node={childNode} indexPath={[...indexPath, index]} {api} />
				{/each}
			{/if}
		</div>
	</div>
{:else}
	<div {...api.getItemProps(nodeProps)}>
		📄
		{node.name}
	</div>
{/if}
