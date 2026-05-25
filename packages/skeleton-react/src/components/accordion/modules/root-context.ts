import { createContext } from '../../../internal/create-context.js';
import { useAccordion } from './provider.js';

export const AccordionRootContext = createContext<ReturnType<typeof useAccordion>>();
