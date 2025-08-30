import { useContext } from 'react';
import { AccordionItemContext } from '../modules/context.js';
import type { AccordionItemContextProps } from '../modules/types.js';

export default function (props: AccordionItemContextProps) {
	const itemContext = useContext(AccordionItemContext);
	return props.children(itemContext.itemState);
}
