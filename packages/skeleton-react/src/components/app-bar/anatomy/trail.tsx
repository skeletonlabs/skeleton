import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesAppBar } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface AppBarTrailProps extends PropsWithElement<'nav'>, HTMLAttributes<'nav'> {}

export default function AppBarTrail(props: AppBarTrailProps) {
	const { element, children, ...rest } = props;

	const attributes = mergeProps(rest, {
		className: classesAppBar.trail,
	});

	return element ? element(attributes) : <nav {...attributes}>{children}</nav>;
}
