import { SegmentedControlItemContext } from '../modules/item-context';
import { SegmentedControlRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SegmentedControlItemHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function ItemHiddenInput(props: SegmentedControlItemHiddenInputProps) {
	const segmentedControl = use(SegmentedControlRootContext);
	const itemProps = use(SegmentedControlItemContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		segmentedControl.getItemHiddenInputProps(itemProps),
		{
			className: classesSegmentedControl.itemHiddenInput,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
