import { ItemContext } from '../modules/item-context';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SegmentedControlItemTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function ItemText(props: SegmentedControlItemTextProps) {
	const segmentedControl = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		segmentedControl.getItemTextProps(itemProps),
		{
			className: classesSegmentedControl.itemText,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
