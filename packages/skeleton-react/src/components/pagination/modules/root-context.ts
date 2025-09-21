import type { usePagination } from './use-pagination';
import { createContext } from '@/internal/create-context';

export const PaginationRootContext = createContext<ReturnType<typeof usePagination>>();
