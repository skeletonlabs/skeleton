import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionRootContext, AccordionItemContext } from '../modules/context.js';
import type { AccordionContentProps } from '../modules/types.js';

export default function (props: AccordionContentProps) {
	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getItemContentProps(itemContext.itemProps),
		{
			className: classesAccordion.content
		},
		restAttributes
	);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
