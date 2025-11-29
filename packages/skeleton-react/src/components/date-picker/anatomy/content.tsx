import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Content(props: DatePickerContentProps) {
	const datePicker = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getContentProps(),
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
