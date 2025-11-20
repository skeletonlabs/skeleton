import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerYearSelectProps extends PropsWithElement<'select'>, HTMLAttributes<'select', 'children'> {}

export default function YearSelect(props: DatePickerYearSelectProps) {
	const datePicker = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getYearSelectProps(),
		{
			className: classesDatePicker.yearSelect,
		},
		rest,
	);

	return element ? (
		element(attributes)
	) : (
		<select {...attributes}>
			{datePicker.getYears().map((year, i) => (
				<option key={i} value={year.value}>
					{year.label}
				</option>
			))}
		</select>
	);
}
