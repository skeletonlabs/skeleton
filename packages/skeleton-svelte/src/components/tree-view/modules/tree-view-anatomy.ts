import TreeViewRoot from '../anatomy/tree-view-root.svelte';
import TreeViewTree from '../anatomy/tree-view-tree.svelte';
import TreeViewItem from '../anatomy/tree-view-item.svelte';
import TreeViewBranch from '../anatomy/tree-view-branch.svelte';
import TreeViewBranchControl from '../anatomy/tree-view-branch-control.svelte';
import TreeViewBranchText from '../anatomy/tree-view-branch-text.svelte';
import TreeViewBranchIndicator from '../anatomy/tree-view-branch-indicator.svelte';
import TreeViewBranchContent from '../anatomy/tree-view-branch-content.svelte';
import TreeViewBranchIndentGuide from '../anatomy/tree-view-branch-indent-guide.svelte';
import TreeViewLabel from '../anatomy/tree-view-label.svelte';
import TreeViewRootContext from '../anatomy/tree-view-root-context.svelte';
import TreeViewNodeContext from '../anatomy/tree-view-node-context.svelte';

export const TreeView = Object.assign(TreeViewRoot, {
	Tree: TreeViewTree,
	Label: TreeViewLabel,
	Branch: TreeViewBranch,
	BranchControl: TreeViewBranchControl,
	BranchText: TreeViewBranchText,
	BranchIndicator: TreeViewBranchIndicator,
	BranchContent: TreeViewBranchContent,
	BranchIndentGuide: TreeViewBranchIndentGuide,
	Item: TreeViewItem,
	RootContext: TreeViewRootContext,
	NodeContext: TreeViewNodeContext
});
