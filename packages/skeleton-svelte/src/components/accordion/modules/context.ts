import { createContext } from '../../../internal/create-context-new.js';
import type { AccordionItemContext as AccordionItemContextType, AccordionRootContext as AccordionRootContextType } from './types.js';

const AccordionRootContext = createContext<AccordionRootContextType>();
const AccordionItemContext = createContext<AccordionItemContextType>();

export { AccordionRootContext, AccordionItemContext };
