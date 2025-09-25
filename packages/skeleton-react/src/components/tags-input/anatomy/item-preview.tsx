import { TagsInputItemContext } from '../modules/item-context';
import { TagsInputRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TagsInputItemPreviewProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemPreview(props: TagsInputItemPreviewProps) {
	const tagsInput = use(TagsInputRootContext);
	const itemProps = use(TagsInputItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		tagsInput.getItemPreviewProps(itemProps),
		{
			className: classesTagsInput.itemPreview,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
