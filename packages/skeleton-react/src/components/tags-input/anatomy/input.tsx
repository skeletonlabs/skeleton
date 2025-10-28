import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TagsInputInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function Input(props: TagsInputInputProps) {
	const tagsInput = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		tagsInput.getInputProps(),
		{
			className: classesTagsInput.input,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
