import type { useTreeView } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface TreeViewRootContextProps {
	children: (treeView: ReturnType<typeof useTreeView>) => ReactNode;
}

export default function RootContext(props: TreeViewRootContextProps) {
	const treeView = use(RootContext_);

	const { children } = props;

	return children(treeView);
}
