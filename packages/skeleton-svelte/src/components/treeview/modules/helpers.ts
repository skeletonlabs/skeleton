import * as tree from '@zag-js/tree-view';
import { TreeViewRootContext } from './context.js';

function isNodeBranch(nodeProps: tree.NodeProps) {
	const rootContext = TreeViewRootContext.consume();
	if (!rootContext) return false;

	const nodeState = rootContext.api.getNodeState(nodeProps);
	return nodeState.isBranch;
}

const createTreeViewCollection = tree.collection;

export { isNodeBranch, createTreeViewCollection };
