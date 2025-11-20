import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
import { splitItemProps, type ItemProps } from '@zag-js/radio-group';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SegmentedControlItemProps extends ItemProps, PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function Item(props: SegmentedControlItemProps) {
	const segmentedControl = use(RootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		segmentedControl.getItemProps(itemProps),
		{
			className: classesSegmentedControl.item,
		},
		rest,
	);

	return (
		<ItemContext.Provider value={itemProps}>
			{element ? element(attributes) : <label {...attributes}>{children}</label>}
		</ItemContext.Provider>
	);
}
