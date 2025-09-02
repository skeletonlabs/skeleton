import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import type { ComponentProps } from 'react';
import type { PropsWithElement } from '../../../internal/props-with-element.js';

export interface TabsLabelProps extends PropsWithElement, ComponentProps<'span'> {}

export default function (props: TabsLabelProps) {
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		{
			className: classesTabs.label
		},
		restAttributes
	);
	return element ? element({ attributes }) : <span {...attributes}>{children}</span>;
}
