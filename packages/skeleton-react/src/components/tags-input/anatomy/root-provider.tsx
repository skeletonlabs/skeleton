import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { TagsInputRootContext } from '../modules/root-context';
import type { useTagsInput } from '../modules/use-tags-input';

export interface TagsInputRootProviderProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> {
	value: ReturnType<typeof useTagsInput>;
}

export default function RootProvider(props: TagsInputRootProviderProps) {
	const { element, children, value: tagsinput_, ...rest } = props;

	const attributes = mergeProps(tagsinput_.getRootProps(), rest, {
		className: classesTagsInput.root,
	});

	return (
		<TagsInputRootContext.Provider value={tagsinput_}>
			{element ? element(attributes) : <label {...attributes}>{children}</label>}
		</TagsInputRootContext.Provider>
	);
}
