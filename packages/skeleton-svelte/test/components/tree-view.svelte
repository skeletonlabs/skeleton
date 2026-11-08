<script lang="ts">
	import { TreeView, createTreeViewCollection } from '../../src/index.js';

	const collection = createTreeViewCollection({
		rootNode: '',
	});
</script>

<TreeView {collection} data-testid="root">
	<TreeView.Label data-testid="label" />
	<TreeView.Tree data-testid="tree">
		<TreeView.NodeProvider value={{ node: '', indexPath: [] }}>
			<TreeView.Node data-testid="node">
				<TreeView.NodeExpandTrigger data-testid="node-expand-trigger">
					<TreeView.IndentGuide data-testid="indent-guide" />
					<TreeView.NodeIndicator data-testid="node-indicator" />
					<TreeView.NodeText data-testid="node-text" />
				</TreeView.NodeExpandTrigger>
			</TreeView.Node>
			<TreeView.Node data-testid="leaf-node" />
		</TreeView.NodeProvider>
	</TreeView.Tree>
</TreeView>
