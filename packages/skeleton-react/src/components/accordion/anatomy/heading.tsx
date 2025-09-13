import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { JSX, PropsWithChildren } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface AccordionHeadingProps extends PropsWithChildren, PropsWithElement<'h3'>, HTMLAttributes<'h3'> {
	/**
	 * The level of the heading.
	 *
	 * @default 3
	 */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function (props: AccordionHeadingProps) {
	const { level = 3, element, children, ...rest } = props;

	const Tag: keyof JSX.IntrinsicElements = `h${level}`;

	const attributes = mergeProps(rest, {
		className: classesAccordion.heading
	});

	return element ? element(attributes) : <Tag {...attributes}>{children}</Tag>;
}
