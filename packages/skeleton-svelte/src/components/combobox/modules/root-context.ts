import { createContext } from '../../../internal/create-context.js';
import type { useCombobox } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useCombobox>>();
