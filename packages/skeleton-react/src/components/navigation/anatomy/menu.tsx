import { RootNavigationContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesNavigation } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface NavigationMenuProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function NavigationMenu(props: NavigationMenuProps) {
	const { element, children, ...rest } = props;

	const navigation = use(RootNavigationContext);

	const attributes = mergeProps(
		{
			'data-layout': navigation.layout,
			'data-compact': navigation.compact,
			className: classesNavigation.menu,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
