import { AccordionItemContext } from '../modules/item-context';
import { AccordionRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { splitItemProps } from '@zag-js/accordion';
import type { ItemProps } from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';
import type { PropsWithChildren } from 'react';

export interface AccordionItemProps extends ItemProps, PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Item(props: AccordionItemProps) {
	const accordion = use(AccordionRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		accordion.getItemProps(itemProps),
		{
			className: classesAccordion.item,
		},
		rest,
	);

	return (
		<AccordionItemContext.Provider value={itemProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</AccordionItemContext.Provider>
	);
}
