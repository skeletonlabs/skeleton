import NodeGroupContent from '../anatomy/node-group-content.jsx';
import NodeExpandTrigger from '../anatomy/node-expand-trigger.jsx';
import IndentGuide from '../anatomy/indent-guide.jsx';
import NodeIndicator from '../anatomy/node-indicator.jsx';
import NodeText from '../anatomy/node-text.jsx';
import Node from '../anatomy/node.jsx';
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
	Node: Node,
	NodeExpandTrigger: NodeExpandTrigger,
	NodeText: NodeText,
	NodeIndicator: NodeIndicator,
	NodeGroupContent: NodeGroupContent,
	IndentGuide: IndentGuide,
});
