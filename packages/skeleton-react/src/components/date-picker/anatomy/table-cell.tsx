import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { Union } from '../../../internal/union.js';
import { RootContext } from '../modules/root-context.js';
import { TableCellContext } from '../modules/table-cell-context.js';
import { ViewContext } from '../modules/view-context.js';
import { splitTableCellProps, type DayTableCellProps, type TableCellProps } from '@zag-js/date-picker';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerTableCellProps extends Union<TableCellProps, DayTableCellProps>, PropsWithElement<'td'>, HTMLAttributes<'td'> {}

export default function TableCell(props: DatePickerTableCellProps) {
	const datePicker = use(RootContext);
	const viewProps = use(ViewContext);

	const [tableCellProps, componentProps] = splitTableCellProps(props as unknown as TableCellProps) as unknown as [
		Union<TableCellProps, DayTableCellProps>,
		Omit<DatePickerTableCellProps, keyof Union<TableCellProps, DayTableCellProps>>,
	];
	const { element, children, ...rest } = componentProps;

	function getTableCellProps(tableCellProps: TableCellProps) {
		switch (viewProps.view) {
			case 'day':
				// @ts-expect-error value is number filter
				return datePicker.getDayTableCellProps(tableCellProps);
			case 'month':
				return datePicker.getMonthTableCellProps(tableCellProps);
			case 'year':
				return datePicker.getYearTableCellProps(tableCellProps);
		}
	}

	const attributes = mergeProps(
		getTableCellProps(tableCellProps as TableCellProps),
		rest,
	);

	return (
		<TableCellContext.Provider value={tableCellProps}>
			{element ? element(attributes) : <td {...attributes}>{children}</td>}
		</TableCellContext.Provider>
	);
}
