import { NodeContext } from '../modules/node-context';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTreeView } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewBranchProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Branch(props: TreeViewBranchProps) {
	const treeView = use(RootContext);
	const nodeProps = use(NodeContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		treeView.getBranchProps(nodeProps),
		{
			className: classesTreeView.branch,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
