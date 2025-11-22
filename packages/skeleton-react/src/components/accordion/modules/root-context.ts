import { createContext } from '../../../internal/create-context.js';
import { useAccordion } from './provider.js';

export const RootContext = createContext<ReturnType<typeof useAccordion>>();
