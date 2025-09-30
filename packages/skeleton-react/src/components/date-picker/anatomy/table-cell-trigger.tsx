import { RootContext } from '../modules/root-context';
import { TableCellContext } from '../modules/table-cell-context';
import { ViewContext } from '../modules/view-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import type { TableCellProps } from '@zag-js/date-picker';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerTableCellTriggerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function TableCellTrigger(props: DatePickerTableCellTriggerProps) {
	const datePicker = use(RootContext);
	const viewProps = use(ViewContext);
	const tableCellProps = use(TableCellContext);

	const { element, children, ...rest } = props;

	function getTableCellTriggerProps(tableCellProps: TableCellProps) {
		switch (viewProps.view) {
			case 'day':
				// @ts-expect-error value is number filter
				return datePicker.getDayTableCellTriggerProps(tableCellProps);
			case 'month':
				return datePicker.getMonthTableCellTriggerProps(tableCellProps);
			case 'year':
				return datePicker.getYearTableCellTriggerProps(tableCellProps);
		}
	}

	const attributes = mergeProps(
		getTableCellTriggerProps(tableCellProps),
		{
			className: classesDatePicker.tableCellTrigger,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
