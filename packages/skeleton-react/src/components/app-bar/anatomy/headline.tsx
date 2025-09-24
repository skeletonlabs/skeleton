import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesAppBar } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface AppBarHeadlineProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function AppBarHeadline(props: AppBarHeadlineProps) {
	const { element, children, ...rest } = props;

	const attributes = mergeProps(rest, {
		className: classesAppBar.headline,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
