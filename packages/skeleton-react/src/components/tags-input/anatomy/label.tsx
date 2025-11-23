import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TagsInputLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function Label(props: TagsInputLabelProps) {
	const tagsInput = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		tagsInput.getLabelProps(),
		{
			className: classesTagsInput.label,
		},
		rest,
	);

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
