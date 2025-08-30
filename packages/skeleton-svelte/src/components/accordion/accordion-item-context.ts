import { createContext } from '../../internal/create-context.js';
import type { ItemProps, ItemState } from '@zag-js/accordion';

interface AccordionItemContextType {
	itemProps: ItemProps;
	itemState: ItemState;
}

const AccordionItemContext = createContext<AccordionItemContextType>();

export { AccordionItemContext };
