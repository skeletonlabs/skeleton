import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type Props, splitProps } from '@zag-js/tags-input';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { TagsInputRootContext } from '../modules/root-context';
import { useTagsInput } from '../modules/use-tags-input';

export interface TagsInputRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: TagsInputRootProps) {
	const [tagsinputProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const tagsinput_ = useTagsInput(tagsinputProps);

	const attributes = mergeProps(tagsinput_.getRootProps(), rest, {
		className: classesTagsInput.root,
	});

	return (
		<TagsInputRootContext.Provider value={tagsinput_}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</TagsInputRootContext.Provider>
	);
}
