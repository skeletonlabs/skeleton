import Branch from '../anatomy/branch';
import BranchContent from '../anatomy/branch-content';
import BranchControl from '../anatomy/branch-control';
import BranchIndentGuide from '../anatomy/branch-indent-guide';
import BranchIndicator from '../anatomy/branch-indicator';
import BranchText from '../anatomy/branch-text';
import Item from '../anatomy/item';
import Label from '../anatomy/label';
import NodeProvider from '../anatomy/node-provider';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Tree from '../anatomy/tree';

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
