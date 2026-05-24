import { createContext } from '../../../internal/create-context.js';
import type { useListbox } from './provider.js';

export const ListboxRootContext = createContext<ReturnType<typeof useListbox>>();
