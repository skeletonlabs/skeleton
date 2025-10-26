import { NodeContext } from '../modules/node-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesTreeView } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewBranchIndentGuideProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function BranchIndentGuide(props: TreeViewBranchIndentGuideProps) {
	const treeView = use(RootContext);
	const nodeProps = use(NodeContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		treeView.getBranchIndentGuideProps(nodeProps),
		{
			className: classesTreeView.branchIndentGuide,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
