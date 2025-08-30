import { createContext } from 'react';
import type { ItemProps, ItemState } from '@zag-js/accordion';

interface AccordionItemContextType {
	itemProps: ItemProps;
	itemState: ItemState;
}

export const AccordionItemContext = createContext<AccordionItemContextType>(null!);
