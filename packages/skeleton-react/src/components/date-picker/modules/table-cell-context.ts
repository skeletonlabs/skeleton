import { createContext } from '@/internal/create-context';
import type { Union } from '@/internal/union';
import type { DayTableCellProps, TableCellProps } from '@zag-js/date-picker';

export const TableCellContext = createContext<Union<TableCellProps, DayTableCellProps>>();
