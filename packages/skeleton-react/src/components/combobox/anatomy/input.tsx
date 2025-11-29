import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function Input(props: ComboboxInputProps) {
	const combobox = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(combobox.getInputProps(), rest);

	return element ? element(attributes) : <input {...attributes} />;
}
