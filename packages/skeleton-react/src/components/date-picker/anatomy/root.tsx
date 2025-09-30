import { useDatePicker } from '../modules/provider';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { type Props, splitProps } from '@zag-js/date-picker';
import { mergeProps } from '@zag-js/react';

export interface DatePickerRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: DatePickerRootProps) {
	const [datePickerProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const datePicker = useDatePicker(datePickerProps);

	const attributes = mergeProps(
		datePicker.getRootProps(),
		{
			className: classesDatePicker.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={datePicker}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
