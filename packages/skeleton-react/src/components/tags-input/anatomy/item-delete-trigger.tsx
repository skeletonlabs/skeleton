import { ItemContext } from '../modules/item-context';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TagsInputItemDeleteTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function ItemDeleteTrigger(props: TagsInputItemDeleteTriggerProps) {
	const tagsInput = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, children = <>&times;</>, ...rest } = props;

	const attributes = mergeProps(
		tagsInput.getItemDeleteTriggerProps(itemProps),
		{
			className: classesTagsInput.itemDeleteTrigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
