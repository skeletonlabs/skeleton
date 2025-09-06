import { useContext, type ComponentProps, type PropsWithChildren } from 'react';
import { splitItemProps, type ItemProps } from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionRootContext } from '../modules/accordion-root-context';
import { AccordionItemContext } from '../modules/accordion-item-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AccordionItemProps extends PropsWithChildren, PropsWithElement, ItemProps, ComponentProps<'div'> {}

export default function (props: AccordionItemProps) {
	const rootContext = useContext(AccordionRootContext);
	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const attributes = mergeProps(
		rootContext.api.getItemProps(itemProps),
		{
			className: classesAccordion.item
		},
		restAttributes
	);
	return (
		<AccordionItemContext.Provider value={{ itemProps, itemState: rootContext.api.getItemState(itemProps) }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</AccordionItemContext.Provider>
	);
}
