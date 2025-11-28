import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { ViewContext } from '../modules/view-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerTableRowProps extends PropsWithElement<'tr'>, HTMLAttributes<'tr'> {}

export default function TableRow(props: DatePickerTableRowProps) {
	const datePicker = use(RootContext);
	const viewProps = use(ViewContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getTableRowProps(viewProps),
		{
			className: classes.datePicker.tableRow,
		},
		rest,
	);

	return element ? element(attributes) : <tr {...attributes}>{children}</tr>;
}
