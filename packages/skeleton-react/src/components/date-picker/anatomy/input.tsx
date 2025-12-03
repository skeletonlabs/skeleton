import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { splitInputProps, type InputProps } from '@zag-js/date-picker';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerInputProps extends InputProps, PropsWithElement<'input'>, Omit<HTMLAttributes<'input'>, 'children'> {}

export default function Input(props: DatePickerInputProps) {
	const datePicker = use(RootContext);

	const [inputProps, componentProps] = splitInputProps(props);
	const { element, ...rest } = componentProps;

	const attributes = mergeProps(datePicker.getInputProps(inputProps), rest);

	return element ? element(attributes) : <input {...attributes} />;
}
