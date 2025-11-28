import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ListboxInputProps extends PropsWithElement<'input'>, Omit<HTMLAttributes<'input'>, 'children'> {}

export default function Input(props: ListboxInputProps) {
	const listbox = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		listbox.getInputProps(),
		{
			className: classes.listbox.input,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
