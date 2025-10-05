import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesListbox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ListboxInputProps extends PropsWithElement<'input'>, Omit<HTMLAttributes<'input'>, 'children'> {}

export default function Input(props: ListboxInputProps) {
	const listbox = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		listbox.getInputProps(),
		{
			className: classesListbox.input,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
