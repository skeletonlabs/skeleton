import { useContext, type ReactNode } from 'react';
import { AccordionItemContext } from './accordion-item.context';
import type { ItemState } from '@zag-js/accordion';

export interface AccordionItemContextProps {
	children: (itemState: ItemState) => ReactNode;
}

export default function (props: AccordionItemContextProps) {
	const itemContext = useContext(AccordionItemContext);
	return props.children(itemContext.itemState);
}
