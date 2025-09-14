import type { ItemProps } from '@zag-js/accordion';
import { createContext } from 'react';

export const AccordionItemContext = createContext<ItemProps>(null!);
