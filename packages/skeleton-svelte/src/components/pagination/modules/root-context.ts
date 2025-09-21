import type { usePagination } from './use-pagination.svelte';
import { createContext } from '@/internal/create-context';

export const PaginationRootContext = createContext<ReturnType<typeof usePagination>>();
