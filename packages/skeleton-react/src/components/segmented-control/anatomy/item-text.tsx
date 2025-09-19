import { SegmentedControlItemContext } from '../modules/item-context';
import { SegmentedControlRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SegmentedControlItemTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function ItemText(props: SegmentedControlItemTextProps) {
	const segmentedControl = use(SegmentedControlRootContext);
	const itemProps = use(SegmentedControlItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(segmentedControl.getItemTextProps(itemProps), rest, {
		className: classesSegmentedControl.itemText,
	});

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
