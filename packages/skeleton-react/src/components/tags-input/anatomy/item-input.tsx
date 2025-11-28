import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
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
			className: classes.tagsInput.itemInput,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
