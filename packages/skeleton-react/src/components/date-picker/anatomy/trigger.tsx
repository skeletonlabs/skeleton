import { RootContext } from '../modules/root-context';
import Calendar from '@/internal/components/calendar';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function Trigger(props: DatePickerTriggerProps) {
	const datePicker = use(RootContext);

	const { element, children = <Calendar />, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getTriggerProps(),
		{
			className: classesDatePicker.trigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
