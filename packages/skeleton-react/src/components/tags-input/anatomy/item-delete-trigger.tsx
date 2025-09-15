import { classesTagsInput } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import X from '@/internal/components/x';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { TagsInputItemContext } from '../modules/item-context';
import { TagsInputRootContext } from '../modules/root-context';

export interface TagsInputItemDeleteTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function ItemDeleteTrigger(props: TagsInputItemDeleteTriggerProps) {
	const tagsInput = use(TagsInputRootContext);
	const itemProps = use(TagsInputItemContext);

	const { element, children = <X className="size-4" />, ...rest } = props;

	const attributes = mergeProps(tagsInput.getItemDeleteTriggerProps(itemProps), rest, {
		className: classesTagsInput.itemDeleteTrigger,
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
