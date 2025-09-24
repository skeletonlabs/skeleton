import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import type { JSX, PropsWithChildren } from 'react';

export interface AccordionItemHeadingProps extends PropsWithChildren, PropsWithElement<'h3'>, HTMLAttributes<'h3'> {
	/**
	 * The level of the heading.
	 *
	 * @default 3
	 */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function ItemHeading(props: AccordionItemHeadingProps) {
	const { level = 3, element, children, ...rest } = props;

	const Tag: keyof JSX.IntrinsicElements = `h${level}`;

	const attributes = mergeProps(
		{
			className: classesAccordion.heading,
		},
		rest,
	);

	return element ? element(attributes) : <Tag {...attributes}>{children}</Tag>;
}
