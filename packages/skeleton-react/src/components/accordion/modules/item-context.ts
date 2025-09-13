import { createContext } from 'react';
import type { ItemProps } from '@zag-js/accordion';

export const AccordionItemContext = createContext<ItemProps>(null!);
