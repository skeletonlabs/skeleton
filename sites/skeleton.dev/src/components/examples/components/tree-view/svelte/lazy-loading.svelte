<script lang="ts">
	import { FileIcon, FolderIcon } from '@lucide/svelte';
	import { TreeView, createTreeViewCollection, type TreeViewRootProps } from '@skeletonlabs/skeleton-svelte';

	interface Node {
		id: string;
		name: string;
		children?: Node[];
		childrenCount?: number;
	}

	const response: Record<string, Node[]> = {
		node_modules: [
			{
				id: 'node_modules/@skeletonlabs',
				name: '@skeletonlabs',
				childrenCount: 3,
			},
		],
		'node_modules/@skeletonlabs': [
			{
				id: 'node_modules/@skeletonlabs/skeleton',
				name: 'skeleton',
			},
			{
				id: 'node_modules/@skeletonlabs/skeleton-react',
				name: 'skeleton-react',
			},
			{
				id: 'node_modules/@skeletonlabs/skeleton-svelte',
				name: 'skeleton-svelte',
			},
		],
	};

	let collection = $state(
		createTreeViewCollection<Node>({
			nodeToValue: (node) => node.id,
			nodeToString: (node) => node.name,
			rootNode: {
				id: 'root',
				name: '',
				children: [
					{
						id: 'node_modules',
						name: 'node_modules',
						childrenCount: 1,
					},
					{
						id: 'package.json',
						name: 'package.json',
					},
				],
			},
		}),
	);

	const loadChildren: TreeViewRootProps['loadChildren'] = async (details) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return response[details.node.id] || [];
	};

	const onLoadChildrenComplete: TreeViewRootProps['onLoadChildrenComplete'] = (details) => {
		collection = details.collection;
	};
</script>

<TreeView {collection} {loadChildren} {onLoadChildrenComplete}>
	<TreeView.Label>File System</TreeView.Label>
	<TreeView.Tree>
		{#each collection.rootNode.children || [] as node, index (node)}
			{@render treeNode(node, [index])}
		{/each}
	</TreeView.Tree>
</TreeView>

{#snippet treeNode(node: Node, indexPath: number[])}
	<TreeView.NodeProvider value={{ node, indexPath }}>
		{#if node.children || node.childrenCount}
			<TreeView.Branch>
				<TreeView.BranchControl>
					<TreeView.BranchIndicator />
					<TreeView.BranchText>
						<FolderIcon class="size-4" />
						{node.name}
					</TreeView.BranchText>
				</TreeView.BranchControl>
				<TreeView.BranchContent>
					<TreeView.BranchIndentGuide />
					{#each node.children ?? [] as childNode, childIndex (childNode)}
						{@render treeNode(childNode, [...indexPath, childIndex])}
					{/each}
				</TreeView.BranchContent>
			</TreeView.Branch>
		{:else}
			<TreeView.Item>
				<FileIcon class="size-4" />
				{node.name}
			</TreeView.Item>
		{/if}
	</TreeView.NodeProvider>
{/snippet}
