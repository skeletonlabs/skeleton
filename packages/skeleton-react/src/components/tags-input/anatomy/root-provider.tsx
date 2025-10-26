import type { useTagsInput } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
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
		<RootContext.Provider value={tagsInput}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
