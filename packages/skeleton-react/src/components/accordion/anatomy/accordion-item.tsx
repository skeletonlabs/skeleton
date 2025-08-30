'use client';

import { useContext } from 'react';
import * as accordion from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionRootContext, AccordionItemContext } from '../modules/context.js';
import type { AccordionItemProps } from '../modules/types.js';

export default function (props: AccordionItemProps) {
	const rootContext = useContext(AccordionRootContext);
	const [itemProps, componentProps] = accordion.splitItemProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const attributes = mergeProps(
		rootContext.api.getItemProps(itemProps),
		{
			className: classesAccordion.item
		},
		restAttributes
	);
	return (
		<AccordionItemContext.Provider value={{ itemState: rootContext.api.getItemState(itemProps) }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</AccordionItemContext.Provider>
	);
}
