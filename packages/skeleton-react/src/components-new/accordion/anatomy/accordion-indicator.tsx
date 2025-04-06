import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import { AccordionRootContext, AccordionItemContext } from '../modules/context.js';
import type { AccordionIndicatorProps } from '../modules/types.js';

export default function (props: AccordionIndicatorProps) {
	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);
	const { children, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getItemIndicatorProps(itemContext.itemProps), restAttributes);
	return <div {...attributes}>{children}</div>;
}
