import { mergeProps } from '@zag-js/react';
import { useContext, type ComponentProps, type PropsWithChildren } from 'react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionItemContext } from '../modules/accordion-item-context.js';
import { AccordionRootContext } from '../modules/accordion-root-context.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';

export interface AccordionIndicatorProps extends PropsWithChildren, PropsWithElement, ComponentProps<'div'> {}

export default function (props: AccordionIndicatorProps) {
	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getItemIndicatorProps(itemContext.itemProps),
		{
			className: classesAccordion.indicator
		},
		restAttributes
	);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
