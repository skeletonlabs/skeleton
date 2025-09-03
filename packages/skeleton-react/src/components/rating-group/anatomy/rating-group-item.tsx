import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { splitItemProps, type ItemProps } from '@zag-js/rating-group';
import { mergeProps } from '@zag-js/react';
import { useContext, type ComponentProps } from 'react';
import { RatingGroupItemContext } from '../modules/rating-group-item-context.js';
import { RatingGroupRootContext } from '../modules/rating-group-root-context.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';

export interface RatingGroupItemProps extends PropsWithElement, ItemProps, Omit<ComponentProps<'span'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: RatingGroupItemProps) {
	const rootContext = useContext(RatingGroupRootContext);
	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const attributes = mergeProps(
		rootContext.api.getItemProps(itemProps),
		{
			className: classesAccordion.item
		},
		restAttributes
	);
	const itemState = rootContext.api.getItemState(itemProps);
	return (
		<RatingGroupItemContext.Provider value={{ itemState }}>
			{element ? element({ attributes }) : <span {...attributes}>{children}</span>}
		</RatingGroupItemContext.Provider>
	);
}
