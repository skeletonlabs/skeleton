import { createContext } from '../../../internal/create-context.js';
import type { usePagination } from './provider.svelte.js';

export const PaginationRootContext = createContext<ReturnType<typeof usePagination>>();
