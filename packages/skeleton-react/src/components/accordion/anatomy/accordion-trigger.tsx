import { useContext, type ComponentProps, type PropsWithChildren } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionItemContext } from '../modules/accordion-item-context.js';
import { AccordionRootContext } from '../modules/accordion-root-context.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';

export interface AccordionTriggerProps extends PropsWithChildren, PropsWithElement, ComponentProps<'button'> {}

export default function (props: AccordionTriggerProps) {
	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getItemTriggerProps(itemContext.itemProps),
		{
			className: classesAccordion.trigger
		},
		restAttributes
	);
	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
