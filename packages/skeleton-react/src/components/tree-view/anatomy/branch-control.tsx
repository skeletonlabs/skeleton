import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { NodeContext } from '../modules/node-context.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewBranchControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function BranchControl(props: TreeViewBranchControlProps) {
	const treeView = use(RootContext);
	const nodeProps = use(NodeContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		treeView.getBranchControlProps(nodeProps),
		{
			className: classes.treeView.branchControl,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
