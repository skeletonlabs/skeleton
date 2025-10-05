import BranchContent from '../anatomy/branch-content.svelte';
import BranchControl from '../anatomy/branch-control.svelte';
import BranchIndentGuide from '../anatomy/branch-indent-guide.svelte';
import BranchIndicator from '../anatomy/branch-indicator.svelte';
import BranchText from '../anatomy/branch-text.svelte';
import Branch from '../anatomy/branch.svelte';
import Item from '../anatomy/item.svelte';
import Label from '../anatomy/label.svelte';
import NodeProvider from '../anatomy/node-provider.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Tree from '../anatomy/tree.svelte';

export const TreeView = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Tree: Tree,
	Label: Label,
	NodeProvider: NodeProvider,
	Branch: Branch,
	BranchControl: BranchControl,
	BranchText: BranchText,
	BranchIndicator: BranchIndicator,
	BranchContent: BranchContent,
	BranchIndentGuide: BranchIndentGuide,
	Item: Item,
});
