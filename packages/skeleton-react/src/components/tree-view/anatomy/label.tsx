import { TreeViewRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTreeView } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use, type JSX } from 'react';

export interface TreeViewLabelProps extends PropsWithElement<'h3'>, HTMLAttributes<'h3'> {
	/**
	 * The level of the heading.
	 *
	 * @defaultValue 3
	 */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Label(props: TreeViewLabelProps) {
	const treeView = use(TreeViewRootContext);

	const { element, children, level = 3, ...rest } = props;

	const attributes = mergeProps(
		treeView.getLabelProps(),
		{
			className: classesTreeView.label,
		},
		rest,
	);

	const Tag: keyof JSX.IntrinsicElements = `h${level}`;

	return element ? element(attributes) : <Tag {...attributes}>{children}</Tag>;
}
