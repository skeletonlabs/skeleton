import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import Check from '@/internal/components/check';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesListbox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ListboxItemIndicatorProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function ItemIndicator(props: ListboxItemIndicatorProps) {
	const listbox = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, children = <Check className="size-4" />, ...rest } = props;

	const attributes = mergeProps(
		listbox.getItemIndicatorProps(itemProps),
		{
			className: classesListbox.itemIndicator,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
