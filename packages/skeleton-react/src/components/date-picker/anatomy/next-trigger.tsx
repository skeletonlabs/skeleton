// oxlint-disable-next-line no-unused-vars
import { RootContext } from '../modules/root-context.js';
import { ViewContext } from '../modules/view-context.js';
import ChevronRight from '@/internal/components/chevron-right.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerNextTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function NextTrigger(props: DatePickerNextTriggerProps) {
	const datePicker = use(RootContext);
	const viewProps = use(ViewContext);

	const { element, children = <ChevronRight />, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getNextTriggerProps(viewProps),
		{
			className: classesDatePicker.nextTrigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
