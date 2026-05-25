import { createContext } from '../../../internal/create-context.js';
import type { useListbox } from './provider.svelte.js';

export const ListboxRootContext = createContext<ReturnType<typeof useListbox>>();
