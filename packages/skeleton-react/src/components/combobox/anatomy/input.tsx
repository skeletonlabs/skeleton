import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { ComboboxRootContext } from '../modules/root-context';

export interface ComboboxInputProps extends PropsWithElement<'input'>, Omit<HTMLAttributes<'input'>, 'children'> {}

export default function Input(props: ComboboxInputProps) {
	const combobox = use(ComboboxRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(combobox.getInputProps(), rest, {
		className: classesCombobox.input,
	});

	return element ? element(attributes) : <input {...attributes} />;
}
