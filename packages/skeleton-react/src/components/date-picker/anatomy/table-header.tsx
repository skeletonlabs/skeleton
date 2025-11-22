import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { ViewContext } from '../modules/view-context.js';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerTableHeaderProps extends PropsWithElement<'th'>, HTMLAttributes<'th'> {}

export default function TableHeader(props: DatePickerTableHeaderProps) {
	const datePicker = use(RootContext);
	const viewProps = use(ViewContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getTableHeaderProps(viewProps),
		{
			className: classesDatePicker.tableHeader,
		},
		rest,
	);

	return element ? element(attributes) : <th {...attributes}>{children}</th>;
}
