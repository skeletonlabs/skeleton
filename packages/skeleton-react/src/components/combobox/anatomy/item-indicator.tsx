import { ComboboxItemContext } from '../modules/item-context';
import { ComboboxRootContext } from '../modules/root-context';
import CheckIcon from '@/internal/components/check';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxItemIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemIndicator(props: ComboboxItemIndicatorProps) {
	const combobox = use(ComboboxRootContext);
	const itemProps = use(ComboboxItemContext);

	const { element, children = <CheckIcon className="size-4" />, ...rest } = props;

	const attributes = mergeProps(combobox.getItemIndicatorProps(itemProps), rest, {
		className: classesCombobox.itemIndicator,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
