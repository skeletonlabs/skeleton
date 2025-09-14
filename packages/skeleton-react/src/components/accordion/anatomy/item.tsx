import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { type ItemProps, splitItemProps } from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';
import { type PropsWithChildren, use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { AccordionItemContext } from '../modules/item-context';
import { AccordionRootContext } from '../modules/root-context';

export interface AccordionItemProps extends ItemProps, PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function AccordionItem(props: AccordionItemProps) {
	const accordion = use(AccordionRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(accordion.getItemProps(itemProps), rest, {
		className: classesAccordion.item,
	});

	return (
		<AccordionItemContext.Provider value={itemProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</AccordionItemContext.Provider>
	);
}
