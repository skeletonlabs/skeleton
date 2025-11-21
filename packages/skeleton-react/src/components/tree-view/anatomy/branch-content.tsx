import { NodeContext } from '../modules/node-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesTreeView } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewBranchContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function BranchContent(props: TreeViewBranchContentProps) {
	const treeView = use(RootContext);
	const nodeProps = use(NodeContext);

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
