import { createContext } from '../../../internal/create-context.js';
import type { useAccordion } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useAccordion>>();
