import { createContext } from '@/internal/create-context';
import type { useAccordion } from './use-accordion.svelte';

export const AccordionRootContext = createContext<ReturnType<typeof useAccordion>>();
