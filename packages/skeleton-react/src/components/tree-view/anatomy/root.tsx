import { useTreeView } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesTreeView } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { splitProps } from '@zag-js/tree-view';
import type { Props, TreeNode } from '@zag-js/tree-view';

export interface TreeViewRootProps<T extends TreeNode = TreeNode>
	extends Omit<Props<T>, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root<T extends TreeNode = TreeNode>(props: TreeViewRootProps<T>) {
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
		<RootContext.Provider value={treeView}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
