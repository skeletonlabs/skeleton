import { RootContext } from '../modules/root-context.js';
import { ViewContext } from '../modules/view-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerTableProps extends PropsWithElement<'table'>, HTMLAttributes<'table'> {}

export default function Table(props: DatePickerTableProps) {
	const datePicker = use(RootContext);
	const viewProps = use(ViewContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getTableProps(viewProps),
		{
			className: classesDatePicker.table,
		},
		rest,
	);

	return element ? element(attributes) : <table {...attributes}>{children}</table>;
}
