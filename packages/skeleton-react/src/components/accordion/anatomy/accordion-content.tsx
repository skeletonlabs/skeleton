'use client';

import { useContext, type ComponentProps, type PropsWithChildren } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionRootContext } from '../modules/accordion-root-context.js';
import { AccordionItemContext } from '../modules/accordion-item-context.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';

export interface AccordionContentProps extends PropsWithChildren, PropsWithElement, ComponentProps<'div'> {}

export default function (props: AccordionContentProps) {
	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getItemContentProps(itemContext.itemProps),
		{
			className: classesAccordion.content
		},
		restAttributes
	);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
