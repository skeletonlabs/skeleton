import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { classesCollapsible } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface CollapsibleIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Indicator(props: CollapsibleIndicatorProps) {
	const collapsible = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		collapsible.getIndicatorProps(),
		{
			className: classesCollapsible.indicator,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
