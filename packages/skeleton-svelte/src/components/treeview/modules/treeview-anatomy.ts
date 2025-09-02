import TreeViewRoot from '../anatomy/treeview-root.svelte';
import TreeViewTree from '../anatomy/treeview-tree.svelte';
import TreeViewItem from '../anatomy/treeview-item.svelte';
import TreeViewBranch from '../anatomy/treeview-branch.svelte';
import TreeViewBranchControl from '../anatomy/treeview-branch-control.svelte';
import TreeViewBranchText from '../anatomy/treeview-branch-text.svelte';
import TreeViewBranchIndicator from '../anatomy/treeview-branch-indicator.svelte';
import TreeViewBranchContent from '../anatomy/treeview-branch-content.svelte';
import TreeViewBranchIndentGuide from '../anatomy/treeview-branch-indent-guide.svelte';
import TreeViewLabel from '../anatomy/treeview-label.svelte';
import TreeViewRootContext from '../anatomy/treeview-root-context.svelte';
import TreeViewNodeContext from '../anatomy/treeview-node-context.svelte';

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
