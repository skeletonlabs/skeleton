import { TreeView, createTreeViewCollection, useTreeView } from '@skeletonlabs/skeleton-react';
import { FileIcon, FolderIcon } from 'lucide-react';

interface Node {
	id: string;
	name: string;
	children?: Node[];
}

function TreeNode(props: { node: Node; indexPath: number[] }) {
	return (
		<TreeView.NodeProvider value={props}>
			{props.node.children ? (
				<TreeView.Branch>
					<TreeView.BranchControl>
						<TreeView.BranchIndicator />
						<TreeView.BranchText>
							<FolderIcon className="size-4" />
							{props.node.name}
						</TreeView.BranchText>
					</TreeView.BranchControl>
					<TreeView.BranchContent>
						<TreeView.BranchIndentGuide />
						{props.node.children.map((childNode, childIndex) => (
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

export default function CollapseExpand() {
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

	const treeView = useTreeView({
		collection: collection,
	});

	return (
		<div className="w-full flex flex-col items-center gap-4">
			<TreeView.Provider value={treeView}>
				<TreeView.Label>File System</TreeView.Label>
				<TreeView.Tree>
					{collection.rootNode.children?.map((node, index) => (
						<TreeNode node={node} indexPath={[index]} key={node.id} />
					))}
				</TreeView.Tree>
			</TreeView.Provider>

			<div className="flex gap-2">
				<button className="btn preset-filled" onClick={() => treeView.collapse()}>
					Collapse
				</button>
				<button className="btn preset-filled" onClick={() => treeView.expand()}>
					Expand
				</button>
			</div>
		</div>
	);
}
