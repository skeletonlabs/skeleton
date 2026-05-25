import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { DatePickerRootContext } from '../modules/root-context.js';
import { DatePickerViewContext } from '../modules/view-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerViewControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ViewControl(props: DatePickerViewControlProps) {
	const datePicker = use(DatePickerRootContext);
	const viewProps = use(DatePickerViewContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(datePicker.getViewControlProps(viewProps), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
