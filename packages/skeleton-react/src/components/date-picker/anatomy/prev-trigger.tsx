import { RootContext } from '../modules/root-context';
import { ViewContext } from '../modules/view-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerPrevTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function PrevTrigger(props: DatePickerPrevTriggerProps) {
	const datePicker = use(RootContext);
	const viewProps = use(ViewContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getPrevTriggerProps(viewProps),
		{
			className: classesDatePicker.prevTrigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
