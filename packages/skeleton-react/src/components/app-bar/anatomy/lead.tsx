import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';

export interface AppBarLeadProps extends PropsWithElement<'nav'>, HTMLAttributes<'nav'> {}

export default function AppBarLead(props: AppBarLeadProps) {
	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		{
			className: classes.appBar.lead,
		},
		rest,
	);

	return element ? element(attributes) : <nav {...attributes}>{children}</nav>;
}
