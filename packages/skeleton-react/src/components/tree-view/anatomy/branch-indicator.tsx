import { NodeContext } from '../modules/node-context';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTreeView } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewBranchIndicatorProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function BranchIndicator(props: TreeViewBranchIndicatorProps) {
	const treeView = use(RootContext);
	const nodeProps = use(NodeContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		treeView.getBranchIndicatorProps(nodeProps),
		{
			className: classesTreeView.branchIndicator,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
