<script lang="ts">
	import { FileIcon, FolderIcon } from '@lucide/svelte';
	import { TreeView, createTreeViewCollection, useTreeView } from '@skeletonlabs/skeleton-svelte';

	interface Node {
		id: string;
		name: string;
		children?: Node[];
	}

	const collection = createTreeViewCollection<Node>({
		nodeToValue: (node) => node.id,
		nodeToString: (node) => node.name,
		rootNode: {
			id: 'root',
			name: '',
			children: [
				{
					id: 'node_modules',
					name: 'node_modules',
					children: [
						{
							id: 'node_modules/@skeletonlabs',
							name: '@skeletonlabs',
							children: [
								{
									id: 'node_modules/@skeletonlabs/skeleton',
									name: 'skeleton',
								},
							],
						},
					],
				},
				{
					id: 'package.json',
					name: 'package.json',
				},
			],
		},
	});

	const id = $props.id();
	const treeView = useTreeView({
		id: id,
		collection: collection,
	});
</script>

<div class="w-full flex flex-col items-center gap-4">
	<TreeView.Provider value={treeView}>
		<TreeView.Label>File System</TreeView.Label>
		<TreeView.Tree>
			{#each collection.rootNode.children || [] as node, index (node)}
				{@render treeNode(node, [index])}
			{/each}
		</TreeView.Tree>
	</TreeView.Provider>

	<div class="flex gap-2">
		<button class="btn preset-filled" onclick={() => treeView().collapse()}> Collapse </button>
		<button class="btn preset-filled" onclick={() => treeView().expand()}> Expand </button>
	</div>
</div>

{#snippet treeNode(node: Node, indexPath: number[])}
	<TreeView.NodeProvider value={{ node, indexPath }}>
		{#if node.children}
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
					{#each node.children as childNode, childIndex (childNode)}
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
