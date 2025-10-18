import { TreeView, createTreeViewCollection, type TreeViewRootProps } from '@skeletonlabs/skeleton-react';
import { FileIcon, FolderIcon, LoaderIcon } from 'lucide-react';
import { useState } from 'react';

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

function TreeNode(props: { node: Node; indexPath: number[] }) {
	return (
		<TreeView.NodeProvider value={props}>
			{props.node.children || props.node.childrenCount ? (
				<TreeView.Branch>
					<TreeView.BranchControl>
						<TreeView.BranchIndicator className="data-loading:hidden" />
						<TreeView.BranchIndicator className="hidden data-loading:inline animate-spin">
							<LoaderIcon className="size-4" />
						</TreeView.BranchIndicator>
						<TreeView.BranchText>
							<FolderIcon className="size-4" />
							{props.node.name}
						</TreeView.BranchText>
					</TreeView.BranchControl>
					<TreeView.BranchContent>
						<TreeView.BranchIndentGuide />
						{props.node.children?.map((childNode, childIndex) => (
							<TreeNode key={childNode.id} node={childNode} indexPath={[...props.indexPath, childIndex]} />
						))}
					</TreeView.BranchContent>
				</TreeView.Branch>
			) : (
				<TreeView.Item>
					<FileIcon className="size-4" />
					{props.node.name}
				</TreeView.Item>
			)}
		</TreeView.NodeProvider>
	);
}

export default function LazyLoading() {
	const [collection, setCollection] = useState(
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
		setCollection(details.collection);
	};

	return (
		<TreeView collection={collection} loadChildren={loadChildren} onLoadChildrenComplete={onLoadChildrenComplete}>
			<TreeView.Label>File System</TreeView.Label>
			<TreeView.Tree>
				{collection.rootNode.children?.map((node, index) => (
					<TreeNode node={node} indexPath={[index]} key={node.id} />
				))}
			</TreeView.Tree>
		</TreeView>
	);
}
