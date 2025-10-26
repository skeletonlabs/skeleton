import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TagsInputHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function HiddenInput(props: TagsInputHiddenInputProps) {
	const tagsInput = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		tagsInput.getHiddenInputProps(),
		{
			className: classesTagsInput.hiddenInput,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
