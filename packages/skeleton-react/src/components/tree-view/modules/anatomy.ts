import BranchContent from '../anatomy/branch-content.jsx';
import BranchControl from '../anatomy/branch-control.jsx';
import BranchIndentGuide from '../anatomy/branch-indent-guide.jsx';
import BranchIndicator from '../anatomy/branch-indicator.jsx';
import BranchText from '../anatomy/branch-text.jsx';
import Branch from '../anatomy/branch.jsx';
import Item from '../anatomy/item.jsx';
import Label from '../anatomy/label.jsx';
import NodeContext from '../anatomy/node-context.jsx';
import NodeProvider from '../anatomy/node-provider.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import Tree from '../anatomy/tree.jsx';

export const TreeView = Object.assign(Root, {
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
