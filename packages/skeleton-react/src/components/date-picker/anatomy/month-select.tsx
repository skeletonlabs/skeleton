import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerMonthSelectProps extends PropsWithElement<'select'>, HTMLAttributes<'select', 'children'> {}

export default function MonthSelect(props: DatePickerMonthSelectProps) {
	const datePicker = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getMonthSelectProps(),
		{
			className: classesDatePicker.monthSelect,
		},
		rest,
	);

	return element ? (
		element(attributes)
	) : (
		<select {...attributes}>
			{datePicker.getMonths().map((month, i) => (
				<option key={i} value={month.value}>
					{month.label}
				</option>
			))}
		</select>
	);
}
