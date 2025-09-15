import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { TagsInputRootContext } from '../modules/root-context';

export interface TagsInputClearTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function ClearTrigger(props: TagsInputClearTriggerProps) {
	const tagsInput = use(TagsInputRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tagsInput.getClearTriggerProps(), rest, {
		className: classesTagsInput.clearTrigger,
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
