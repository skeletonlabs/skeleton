import { useContext, type PropsWithChildren } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { splitItemProps, type ItemProps } from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionRootContext } from '../modules/root-context';
import { AccordionItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AccordionItemProps extends ItemProps, PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: AccordionItemProps) {
	const accordion = useContext(AccordionRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(accordion.getItemProps(itemProps), rest, {
		className: classesAccordion.item
	});

	return (
		<AccordionItemContext.Provider value={itemProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</AccordionItemContext.Provider>
	);
}
