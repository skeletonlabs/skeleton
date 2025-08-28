import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { AccordionRootContext, AccordionItemContext } from '../modules/context.js';
import type { AccordionTriggerProps } from '../modules/types.js';
import { classesAccordion } from '@skeletonlabs/skeleton-common';

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
