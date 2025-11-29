import Calendar from '../../../internal/components/calendar.jsx';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function Trigger(props: DatePickerTriggerProps) {
	const datePicker = use(RootContext);

	const { element, children = <Calendar />, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getTriggerProps(),
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
