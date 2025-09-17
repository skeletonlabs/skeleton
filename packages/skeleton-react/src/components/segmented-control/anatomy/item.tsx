import { SegmentedControlItemContext } from '../modules/item-context';
import { SegmentedControlRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
import { splitItemProps, type ItemProps } from '@zag-js/radio-group';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SegmentedControlItemProps extends ItemProps, PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function Item(props: SegmentedControlItemProps) {
	const segmentedControl = use(SegmentedControlRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(segmentedControl.getItemProps(itemProps), rest, {
		className: classesSegmentedControl.item,
	});

	return (
		<SegmentedControlItemContext.Provider value={itemProps}>
			{element ? element(attributes) : <label {...attributes}>{children}</label>}
		</SegmentedControlItemContext.Provider>
	);
}
