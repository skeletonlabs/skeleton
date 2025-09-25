<script lang="ts">
	import { TreeView, createTreeViewCollection, type TreeViewNodeProps } from '@skeletonlabs/skeleton-svelte';

	interface Node {
		id: string;
		name: string;
		children?: Node[];
	}

	const collection = createTreeViewCollection<Node>({
		nodeToValue: (node) => node.id,
		nodeToString: (node) => node.name,
		rootNode: {
			id: 'ROOT',
			name: '',
			children: [
				{
					id: 'node_modules',
					name: 'node_modules',
					children: [
						{ id: 'node_modules/zag-js', name: 'zag-js' },
						{ id: 'node_modules/pandacss', name: 'panda' },
						{
							id: 'node_modules/@types',
							name: '@types',
							children: [
								{ id: 'node_modules/@types/react', name: 'react' },
								{ id: 'node_modules/@types/react-dom', name: 'react-dom' },
							],
						},
					],
				},
			],
		},
	});
</script>

{#snippet treeNode(nodeProps: TreeViewNodeProps)}
	{@const { node, indexPath } = nodeProps}
	<TreeView.Context>
		{#snippet children(treeView)}
			{#if treeView().getNodeState(nodeProps).isBranch}
				<TreeView.Branch {nodeProps}>
					<TreeView.BranchIndicator />
					<TreeView.BranchControl>
						<TreeView.BranchText>{node.name}</TreeView.BranchText>
					</TreeView.BranchControl>
					<TreeView.BranchContent>
						<TreeView.BranchIndentGuide />
						{#each node.children as childNode, childIndex (childIndex)}
							{@render treeNode({ indexPath: [...indexPath, childIndex], node: childNode })}
						{/each}
					</TreeView.BranchContent>
				</TreeView.Branch>
			{:else}
				<TreeView.Item {nodeProps}>
					{node.name}
				</TreeView.Item>
			{/if}
		{/snippet}
	</TreeView.Context>
{/snippet}

<TreeView {collection}>
	<TreeView.Label>File System</TreeView.Label>
	<TreeView.Tree>
		{#each collection.rootNode.children || [] as node, index (index)}
			{@render treeNode({ indexPath: [index], node })}
		{/each}
	</TreeView.Tree>
</TreeView>
