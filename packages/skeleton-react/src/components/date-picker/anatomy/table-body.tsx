import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { ViewContext } from '../modules/view-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerTableBodyProps extends PropsWithElement<'tbody'>, HTMLAttributes<'tbody'> {}

export default function TableBody(props: DatePickerTableBodyProps) {
	const datePicker = use(RootContext);
	const viewProps = use(ViewContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(datePicker.getTableBodyProps(viewProps), rest);

	return element ? element(attributes) : <tbody {...attributes}>{children}</tbody>;
}
