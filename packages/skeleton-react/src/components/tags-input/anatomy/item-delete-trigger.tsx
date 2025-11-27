import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
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
			className: classes.tagsInput.itemDeleteTrigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
