import NodeGroupContent from '../anatomy/node-group-content.svelte';
import NodeExpandTrigger from '../anatomy/node-expand-trigger.svelte';
import IndentGuide from '../anatomy/indent-guide.svelte';
import NodeIndicator from '../anatomy/node-indicator.svelte';
import NodeText from '../anatomy/node-text.svelte';
import Node from '../anatomy/node.svelte';
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
	Node: typeof Node;
	NodeExpandTrigger: typeof NodeExpandTrigger;
	NodeText: typeof NodeText;
	NodeIndicator: typeof NodeIndicator;
	NodeGroupContent: typeof NodeGroupContent;
	IndentGuide: typeof IndentGuide;
} = Object.assign(Root, {
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
