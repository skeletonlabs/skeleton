import { createContext } from '@/internal/create-context';
import type { Api } from '@zag-js/accordion';

export const AccordionRootContext = createContext<() => Api>();
