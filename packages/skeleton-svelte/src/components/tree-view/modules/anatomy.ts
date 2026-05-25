import BranchContent from '../anatomy/branch-content.svelte';
import BranchControl from '../anatomy/branch-control.svelte';
import BranchIndentGuide from '../anatomy/branch-indent-guide.svelte';
import BranchIndicator from '../anatomy/branch-indicator.svelte';
import BranchText from '../anatomy/branch-text.svelte';
import Branch from '../anatomy/branch.svelte';
import Item from '../anatomy/item.svelte';
import Label from '../anatomy/label.svelte';
import NodeContext from '../anatomy/node-context.svelte';
import NodeProvider from '../anatomy/node-provider.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Tree from '../anatomy/tree.svelte';

export const TreeView: typeof Root & {
	Provider: typeof RootProvider;
	Context: typeof RootContext;
	Tree: typeof Tree;
	Label: typeof Label;
	NodeProvider: typeof NodeProvider;
	Branch: typeof Branch;
	BranchControl: typeof BranchControl;
	BranchText: typeof BranchText;
	BranchIndicator: typeof BranchIndicator;
	BranchContent: typeof BranchContent;
	BranchIndentGuide: typeof BranchIndentGuide;
	Item: typeof Item;
} = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Tree: Tree,
	Label: Label,
	NodeProvider: NodeProvider,
	NodeContext: NodeContext,
	Branch: Branch,
	BranchControl: BranchControl,
	BranchText: BranchText,
	BranchIndicator: BranchIndicator,
	BranchContent: BranchContent,
	BranchIndentGuide: BranchIndentGuide,
	Item: Item,
});
