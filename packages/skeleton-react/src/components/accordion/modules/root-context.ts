import { createContext } from '@/internal/create-context';
import type { useAccordion } from './use-accordion';

export const AccordionRootContext = createContext<ReturnType<typeof useAccordion>>();
