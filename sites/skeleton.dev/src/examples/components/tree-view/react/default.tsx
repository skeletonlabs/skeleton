import { TreeView, createTreeViewCollection } from '@skeletonlabs/skeleton-react';
import { ChevronDownIcon, FileIcon, FolderIcon } from 'lucide-react';

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
						<TreeView.BranchIndicator>
							<ChevronDownIcon />
						</TreeView.BranchIndicator>
						<TreeView.BranchText>
							<FolderIcon />
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
					<FileIcon />
					{props.node.name}
				</TreeView.Item>
			)}
		</TreeView.NodeProvider>
	);
}

export default function Default() {
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
							id: 'node_modules/@types',
							name: '@types',
							children: [
								{
									id: 'node_modules/@types/react',
									name: 'react',
								},
								{
									id: 'node_modules/@types/react-dom',
									name: 'react-dom',
								},
							],
						},
						{
							id: 'node_modules/@skeletonlabs',
							name: '@skeletonlabs',
							children: [
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
						},
					],
				},
				{
					id: 'src',
					name: 'src',
					children: [
						{
							id: 'src/index.ts',
							name: 'index.ts',
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
	);
}
