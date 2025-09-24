import { TagsInputItemContext } from '../modules/item-context';
import { TagsInputRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TagsInputItemTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function ItemText(props: TagsInputItemTextProps) {
	const tagsInput = use(TagsInputRootContext);
	const itemProps = use(TagsInputItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		tagsInput.getItemTextProps(itemProps),
		{
			className: classesTagsInput.itemText,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
