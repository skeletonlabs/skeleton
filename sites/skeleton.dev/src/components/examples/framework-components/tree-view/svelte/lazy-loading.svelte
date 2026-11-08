<script lang="ts">
	import FileIcon from '@lucide/svelte/icons/file';
	import FolderIcon from '@lucide/svelte/icons/folder';
	import LoaderIcon from '@lucide/svelte/icons/loader';
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
			<TreeView.Node>
				<TreeView.NodeExpandTrigger>
					<TreeView.NodeIndicator class="data-loading:hidden" />
					<TreeView.NodeIndicator class="hidden data-loading:inline animate-spin">
						<LoaderIcon class="size-4" />
					</TreeView.NodeIndicator>
					<TreeView.NodeText>
						<FolderIcon class="size-4" />
						{node.name}
					</TreeView.NodeText>
				</TreeView.NodeExpandTrigger>
				<TreeView.NodeGroupContent>
					<TreeView.IndentGuide />
					{#each node.children ?? [] as childNode, childIndex (childNode)}
						{@render treeNode(childNode, [...indexPath, childIndex])}
					{/each}
				</TreeView.NodeGroupContent>
			</TreeView.Node>
		{:else}
			<TreeView.Node>
				<FileIcon class="size-4" />
				{node.name}
			</TreeView.Node>
		{/if}
	</TreeView.NodeProvider>
{/snippet}
