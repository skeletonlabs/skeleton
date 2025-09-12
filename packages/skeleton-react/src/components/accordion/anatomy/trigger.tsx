import { useContext, type PropsWithChildren } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionItemContext } from '../modules/item-context';
import { AccordionRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AccordionTriggerProps extends PropsWithChildren, PropsWithElement, HTMLAttributes<'button'> {}

export default function (props: AccordionTriggerProps) {
	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(
		rootContext.api.getItemTriggerProps(itemContext.itemProps),
		{ className: classesAccordion.trigger },
		restAttributes
	);

	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
