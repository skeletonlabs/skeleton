import { TreeViewNodeContext } from '../modules/node-context';
import { TreeViewRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTreeView } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewBranchContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function BranchContent(props: TreeViewBranchContentProps) {
	const treeView = use(TreeViewRootContext);
	const nodeProps = use(TreeViewNodeContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		treeView.getBranchContentProps(nodeProps),
		{
			className: classesTreeView.branchContent,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
