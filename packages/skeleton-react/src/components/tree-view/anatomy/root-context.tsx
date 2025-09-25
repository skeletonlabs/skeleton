import { TreeViewRootContext } from '../modules/root-context';
import type { useTreeView } from '../modules/use-tree-view';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface TreeViewRootContextProps {
	children: (treeView: ReturnType<typeof useTreeView>) => ReactNode;
}

export default function RootContext(props: TreeViewRootContextProps) {
	const treeView = use(TreeViewRootContext);

	const { children } = props;

	return children(treeView);
}
