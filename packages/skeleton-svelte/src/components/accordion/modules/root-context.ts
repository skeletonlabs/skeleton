import type { useAccordion } from './use-accordion.svelte';
import { createContext } from '@/internal/create-context';

export const AccordionRootContext = createContext<ReturnType<typeof useAccordion>>();
