import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';

export interface AppBarRootProps extends PropsWithElement<'header'>, HTMLAttributes<'header'> {}

export default function AppBarRoot(props: AppBarRootProps) {
	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		{
			className: classes.appBar.root,
		},
		rest,
	);

	return element ? element(attributes) : <header {...attributes}>{children}</header>;
}
