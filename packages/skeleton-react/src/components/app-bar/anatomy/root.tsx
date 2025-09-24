import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesAppBar } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface AppBarRootProps extends PropsWithElement<'header'>, HTMLAttributes<'header'> {}

export default function AppBarRoot(props: AppBarRootProps) {
	const { element, children, ...rest } = props;

	const attributes = mergeProps(rest, {
		className: classesAppBar.root,
	});

	return element ? element(attributes) : <header {...attributes}>{children}</header>;
}
