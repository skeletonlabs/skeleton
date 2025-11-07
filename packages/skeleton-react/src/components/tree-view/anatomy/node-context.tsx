import { NodeContext as NodeContext_ } from '../modules/node-context.js';
import type { NodeProps } from '@zag-js/tree-view';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface TreeViewRootContextProps {
	children: (treeView: NodeProps) => ReactNode;
}

export default function NodeContext(props: TreeViewRootContextProps) {
	const treeView = use(NodeContext_);

	const { children } = props;

	return children(treeView);
}
