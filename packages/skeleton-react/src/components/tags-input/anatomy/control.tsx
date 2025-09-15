import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { TagsInputRootContext } from '../modules/root-context';

export interface TagsInputControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Control(props: TagsInputControlProps) {
	const tagsInput = use(TagsInputRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tagsInput.getControlProps(), rest, {
		className: classesTagsInput.control,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
