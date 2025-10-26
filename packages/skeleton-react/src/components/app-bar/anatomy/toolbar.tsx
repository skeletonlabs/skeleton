import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesAppBar } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface AppBarToolbarProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function AppBarToolbar(props: AppBarToolbarProps) {
	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		{
			className: classesAppBar.toolbar,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
