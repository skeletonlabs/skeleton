import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TagsInputControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Control(props: TagsInputControlProps) {
	const tagsInput = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		tagsInput.getControlProps(),
		{
			className: classesTagsInput.control,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
