import { ComboboxRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxInputProps extends PropsWithElement<'input'>, Omit<HTMLAttributes<'input'>, 'children'> {}

export default function Input(props: ComboboxInputProps) {
	const combobox = use(ComboboxRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		combobox.getInputProps(),
		{
			className: classesCombobox.input,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
