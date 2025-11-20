import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import Check from '../../../internal/components/check.jsx';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxItemIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemIndicator(props: ComboboxItemIndicatorProps) {
	const combobox = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, children = <Check className="size-4" />, ...rest } = props;

	const attributes = mergeProps(
		combobox.getItemIndicatorProps(itemProps),
		{
			className: classesCombobox.itemIndicator,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
