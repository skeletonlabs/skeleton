import { createContext } from '@/internal/create-context';
import type { TableCellProps } from '@zag-js/date-picker';

export const TableCellContext = createContext<TableCellProps>();
