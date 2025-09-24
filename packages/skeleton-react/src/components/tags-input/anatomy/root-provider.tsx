import { TagsInputRootContext } from '../modules/root-context';
import type { useTagsInput } from '../modules/use-tags-input';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface TagsInputRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useTagsInput>;
}

export default function RootProvider(props: TagsInputRootProviderProps) {
	const { element, children, value: tagsInput, ...rest } = props;

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
