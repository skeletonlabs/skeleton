import type { JSX } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import type { AccordionHeadingProps } from '../modules/types.js';

export default function (props: AccordionHeadingProps) {
	const { level = 3, element, children, ...restAttributes } = props;
	const Tag: keyof JSX.IntrinsicElements = `h${level}`;
	const attributes = mergeProps(
		{
			className: classesAccordion.heading
		},
		restAttributes
	);
	return element ? element({ attributes }) : <Tag {...attributes}>{children}</Tag>;
}
