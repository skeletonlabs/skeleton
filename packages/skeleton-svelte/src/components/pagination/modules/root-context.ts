import { createContext } from '../../../internal/create-context.js';
import type { usePagination } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof usePagination>>();
