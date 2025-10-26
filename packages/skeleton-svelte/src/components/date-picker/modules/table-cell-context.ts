import { createContext } from '@/internal/create-context.js';
import type { Union } from '@/internal/union.js';
import type { DayTableCellProps, TableCellProps } from '@zag-js/date-picker';

export const TableCellContext = createContext<() => Union<TableCellProps, DayTableCellProps>>();
