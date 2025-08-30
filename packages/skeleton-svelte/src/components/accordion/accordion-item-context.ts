import { createContext } from '../../internal/create-context.js';
import type { ItemProps, ItemState } from '@zag-js/accordion';

interface AccordionItemContextType {
	itemProps: ItemProps;
	itemState: ItemState;
}

export const AccordionItemContext = createContext<AccordionItemContextType>();
