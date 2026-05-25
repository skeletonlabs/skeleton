import { createContext } from '../../../internal/create-context.js';
import type { useAccordion } from './provider.svelte.js';

export const AccordionRootContext = createContext<ReturnType<typeof useAccordion>>();
