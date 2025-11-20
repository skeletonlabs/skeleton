import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesNavigation } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface NavigationContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function NavigationContent(props: NavigationContentProps) {
	const { element, children, ...rest } = props;

	const navigation = use(RootContext);

	const attributes = mergeProps(
		{
			'data-layout': navigation.layout,
			className: classesNavigation.content,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
