import { TreeViewRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTreeView } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> {}

export default function Label(props: TreeViewLabelProps) {
	const treeView = use(TreeViewRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		treeView.getLabelProps(),
		{
			className: classesTreeView.label,
		},
		rest,
	);

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
