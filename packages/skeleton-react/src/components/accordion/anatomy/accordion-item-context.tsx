import { useContext, type ReactNode } from 'react';
import { AccordionItemContext, type AccordionItemContextType } from '../modules/accordion-item-context.js';

export interface AccordionItemContextProps {
	children: (context: AccordionItemContextType) => ReactNode;
}

export default function (props: AccordionItemContextProps) {
	const itemContext = useContext(AccordionItemContext);
	return props.children(itemContext);
}
