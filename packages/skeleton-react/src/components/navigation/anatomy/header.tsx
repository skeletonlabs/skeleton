import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { classesNavigation } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface NavigationHeaderProps extends PropsWithElement<'header'>, HTMLAttributes<'header'> {}

export default function NavigationHeader(props: NavigationHeaderProps) {
	const { element, children, ...rest } = props;

	const navigation = use(RootContext);

	const attributes = mergeProps(
		{
			'data-layout': navigation.layout,
			className: classesNavigation.header,
		},
		rest,
	);

	return element ? element(attributes) : <header {...attributes}>{children}</header>;
}
