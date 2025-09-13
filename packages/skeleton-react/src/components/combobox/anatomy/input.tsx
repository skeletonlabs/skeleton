import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxInputProps extends PropsWithElement<'input'>, Omit<HTMLAttributes<'input'>, 'children'> {}

export default function (props: ComboboxInputProps) {
	const combobox = useContext(ComboboxRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(combobox.getInputProps(), rest, {
		className: classesCombobox.input
	});

	return element ? element(attributes) : <input {...attributes} />;
}
