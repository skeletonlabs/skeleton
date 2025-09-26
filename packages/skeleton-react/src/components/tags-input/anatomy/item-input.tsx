import { ItemContext } from '../modules/item-context';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TagsInputItemInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function ItemInput(props: TagsInputItemInputProps) {
	const tagsInput = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		tagsInput.getItemInputProps(itemProps),
		{
			className: classesTagsInput.itemInput,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
