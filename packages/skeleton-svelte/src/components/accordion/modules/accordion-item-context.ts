import { createContext } from '@/internal/create-context';
import type { ItemProps, ItemState } from '@zag-js/accordion';

export interface AccordionItemContextType {
	itemProps: ItemProps;
	itemState: ItemState;
}

export const AccordionItemContext = createContext<AccordionItemContextType>();
