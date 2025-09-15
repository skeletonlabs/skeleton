import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { TagsInputRootContext } from '../modules/root-context';

export interface TagsInputLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function Label(props: TagsInputLabelProps) {
	const tagsInput = use(TagsInputRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tagsInput.getLabelProps(), rest, {
		className: classesTagsInput.label,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
