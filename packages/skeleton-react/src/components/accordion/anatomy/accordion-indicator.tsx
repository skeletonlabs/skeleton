'use client';

import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionRootContext, AccordionItemContext } from '../modules/context.js';
import type { AccordionIndicatorProps } from '../modules/types.js';

export default function (props: AccordionIndicatorProps) {
	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getItemIndicatorProps(itemContext.itemProps),
		{
			class: classesAccordion.indicator
		},
		restAttributes
	);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
