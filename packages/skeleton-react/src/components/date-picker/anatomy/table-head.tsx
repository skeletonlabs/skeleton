import { RootContext } from '../modules/root-context.js';
import { ViewContext } from '../modules/view-context';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerTableHeadProps extends PropsWithElement<'thead'>, HTMLAttributes<'thead'> {}

export default function TableHead(props: DatePickerTableHeadProps) {
	const datePicker = use(RootContext);
	const viewProps = use(ViewContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getTableHeadProps(viewProps),
		{
			className: classesDatePicker.tableHead,
		},
		rest,
	);

	return element ? element(attributes) : <thead {...attributes}>{children}</thead>;
}
