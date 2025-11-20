import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type ItemProps, splitItemProps } from '@zag-js/tags-input';
import { use } from 'react';

export interface TagsInputItemProps extends ItemProps, PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function Item(props: TagsInputItemProps) {
	const tagsInput = use(RootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		tagsInput.getItemProps(itemProps),
		{
			className: classesTagsInput.item,
		},
		rest,
	);

	return (
		<ItemContext.Provider value={itemProps}>{element ? element(attributes) : <span {...attributes}>{children}</span>}</ItemContext.Provider>
	);
}
