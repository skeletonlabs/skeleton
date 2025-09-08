import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { ComponentProps, JSX, PropsWithChildren } from 'react';

export interface AccordionHeadingProps extends PropsWithChildren, PropsWithElement, ComponentProps<'h3'> {
	/**
	 * The level of the heading.
	 *
	 * @default 3
	 */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function (props: AccordionHeadingProps) {
	const { level = 3, element, children, ...restAttributes } = props;
	const Tag: keyof JSX.IntrinsicElements = `h${level}`;
	const attributes = mergeProps({ className: classesAccordion.heading }, restAttributes);
	return element ? element({ attributes }) : <Tag {...attributes}>{children}</Tag>;
}
