import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerRangeTextProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function RangeText(props: DatePickerRangeTextProps) {
	const datePicker = use(RootContext);

	const rangeText = Array.from(new Set([datePicker.visibleRangeText.start, datePicker.visibleRangeText.end])).join(' - ');

	const { element, children = rangeText, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getRangeTextProps(),
		{
			className: classesDatePicker.rangeText,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
