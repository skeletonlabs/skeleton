import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useTagsInput } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
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

	const attributes = mergeProps(tagsInput.getRootProps(), rest);

	return (
		<RootContext.Provider value={tagsInput}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
