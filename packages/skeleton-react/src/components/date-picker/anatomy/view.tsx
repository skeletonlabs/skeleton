import { RootContext } from '../modules/root-context';
import { ViewContext } from '../modules/view-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { splitViewProps, type ViewProps } from '@zag-js/date-picker';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerViewProps extends Required<ViewProps>, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function View(props: DatePickerViewProps) {
	const datePicker = use(RootContext);

	const [viewProps, componentProps] = splitViewProps(props) as [Required<ViewProps>, Omit<DatePickerViewProps, keyof ViewProps>];
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		datePicker.getViewProps(viewProps),
		{
			className: classesDatePicker.view,
		},
		rest,
	);

	return (
		<ViewContext.Provider value={viewProps}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</ViewContext.Provider>
	);
}
