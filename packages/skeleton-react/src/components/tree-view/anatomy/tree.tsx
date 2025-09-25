import { TreeViewRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTreeView } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewTreeProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Tree(props: TreeViewTreeProps) {
	const treeView = use(TreeViewRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		treeView.getTreeProps(),
		{
			className: classesTreeView.tree,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
