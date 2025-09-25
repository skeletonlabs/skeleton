import { TreeViewRootContext } from '../modules/root-context';
import type { useTreeView } from '../modules/use-tree-view';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTreeView } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface TreeViewRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useTreeView>;
}

export default function RootProvider(props: TreeViewRootProviderProps) {
	const { element, children, value: treeView, ...rest } = props;

	const attributes = mergeProps(
		treeView.getRootProps(),
		{
			className: classesTreeView.root,
		},
		rest,
	);

	return (
		<TreeViewRootContext.Provider value={treeView}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</TreeViewRootContext.Provider>
	);
}
