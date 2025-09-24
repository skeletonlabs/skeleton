import { TagsInputRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TagsInputInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function Input(props: TagsInputInputProps) {
	const tagsInput = use(TagsInputRootContext);

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
