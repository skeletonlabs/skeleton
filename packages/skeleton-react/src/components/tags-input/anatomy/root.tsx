import { TagsInputRootContext } from '../modules/root-context';
import { useTagsInput } from '../modules/use-tags-input';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type Props, splitProps } from '@zag-js/tags-input';

export interface TagsInputRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: TagsInputRootProps) {
	const [tagsInputProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const tagsInput = useTagsInput(tagsInputProps);

	const attributes = mergeProps(
		tagsInput.getRootProps(),
		{
			className: classesTagsInput.root,
		},
		rest,
	);

	return (
		<TagsInputRootContext.Provider value={tagsInput}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</TagsInputRootContext.Provider>
	);
}
