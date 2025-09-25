import { useAccordion } from './use-accordion';
import { createContext } from '@/internal/create-context';

export const AccordionRootContext = createContext<ReturnType<typeof useAccordion>>();
