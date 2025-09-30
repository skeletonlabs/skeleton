import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerInputProps extends PropsWithElement<'input'>, Omit<HTMLAttributes<'input'>, 'children'> {}

export default function Input(props: DatePickerInputProps) {
	const datePicker = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getInputProps(),
		{
			className: classesDatePicker.input,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
