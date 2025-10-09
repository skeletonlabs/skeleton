import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCollapsible } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface CollapsibleContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Content(props: CollapsibleContentProps) {
	const collapsible = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		collapsible.getContentProps(),
		{
			className: classesCollapsible.content,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
