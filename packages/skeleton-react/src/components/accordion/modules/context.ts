import { createContext } from 'react';
import type { AccordionContext as AccordionRootContextType, AccordionItemContext as AccordionItemContextType } from './types.js';

const AccordionRootContext = createContext<AccordionRootContextType>(null!);
const AccordionItemContext = createContext<AccordionItemContextType>(null!);

export { AccordionRootContext, AccordionItemContext };
