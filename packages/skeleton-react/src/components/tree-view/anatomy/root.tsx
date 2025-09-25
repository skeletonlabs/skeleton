import { TreeViewRootContext } from '../modules/root-context';
import { useTreeView } from '../modules/use-tree-view';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTreeView } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { splitProps } from '@zag-js/tree-view';
import type { Props } from '@zag-js/tree-view';

export interface TreeViewRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: TreeViewRootProps) {
	const [treeViewProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const treeView = useTreeView(treeViewProps);

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
