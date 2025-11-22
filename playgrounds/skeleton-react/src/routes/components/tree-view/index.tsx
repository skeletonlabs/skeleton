'use client';

import { TreeView, createTreeViewCollection } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';
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
	)
}

export const Route = createFileRoute('/components/tree-view/')({
	component: Page,
});

function Page() {
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

	return (
		<TreeView collection={collection}>
			<TreeView.Label>File System</TreeView.Label>
			<TreeView.Tree>
				{collection.rootNode.children?.map((node, index) => (
					<TreeNode node={node} indexPath={[index]} key={node.id} />
				))}
			</TreeView.Tree>
		</TreeView>
	)
}
