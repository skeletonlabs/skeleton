<script lang="ts">
	import { TreeView, createTreeViewCollection } from '../../../src/index.js';

	const collection = createTreeViewCollection({
		rootNode: '',
	});
</script>

<TreeView {collection} data-testid="root">
	<TreeView.Label data-testid="label" />
	<TreeView.Tree data-testid="tree">
		<TreeView.NodeProvider value={{ node: '', indexPath: [] }}>
			<TreeView.Branch data-testid="branch">
				<TreeView.BranchControl data-testid="branch-control">
					<TreeView.BranchIndentGuide data-testid="branch-indent-guide" />
					<TreeView.BranchIndicator data-testid="branch-indicator" />
					<TreeView.BranchText data-testid="branch-text" />
				</TreeView.BranchControl>
			</TreeView.Branch>
			<TreeView.Item data-testid="item" />
		</TreeView.NodeProvider>
	</TreeView.Tree>
</TreeView>
