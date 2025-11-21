import { createContext } from '../../../internal/create-context.js';
import type { useListbox } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useListbox>>();
