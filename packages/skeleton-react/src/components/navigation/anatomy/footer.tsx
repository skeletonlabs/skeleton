import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesNavigation } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface NavigationFooterProps extends PropsWithElement<'footer'>, HTMLAttributes<'footer'> {}

export default function NavigationFooter(props: NavigationFooterProps) {
	const { element, children, ...rest } = props;

	const navigation = use(RootContext);

	const attributes = mergeProps(
		{
			'data-layout': navigation.layout,
			className: classesNavigation.footer,
		},
		rest,
	);

	return element ? element(attributes) : <footer {...attributes}>{children}</footer>;
}
