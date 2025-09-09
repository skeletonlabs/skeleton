import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { splitItemProps, type ItemProps } from '@zag-js/rating-group';
import { mergeProps } from '@zag-js/react';
import { useContext, type ComponentProps, type ReactNode } from 'react';
import { RatingGroupItemContext } from '../modules/item-context';
import { RatingGroupRootContext } from '../modules/root-context';
import StarEmpty from '@/internal/components/star-empty';
import StarHalf from '@/internal/components/star-half';
import StarFull from '@/internal/components/star-full';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface RatingGroupItemProps extends PropsWithElement, ItemProps, Omit<ComponentProps<'span'>, 'id' | 'defaultValue' | 'dir'> {
	/**
	 * The content to render when the item is in the empty state.
	 *
	 * @default StarEmpty (SVG)
	 */
	empty?: ReactNode;
	/**
	 * The content to render when the item is in the half state.
	 *
	 * @default StarHalf (SVG)
	 */
	half?: ReactNode;
	/**
	 * The content to render when the item is in the full state.
	 *
	 * @default StarFull (SVG)
	 */
	full?: ReactNode;
}

export default function (props: RatingGroupItemProps) {
	const rootContext = useContext(RatingGroupRootContext);
	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, empty = <StarEmpty />, half = <StarHalf />, full = <StarFull />, ...restAttributes } = componentProps;
	const attributes = mergeProps(rootContext.api.getItemProps(itemProps), { className: classesAccordion.item }, restAttributes);
	const itemState = rootContext.api.getItemState(itemProps);
	return (
		<RatingGroupItemContext.Provider value={{ itemState }}>
			{element ? (
				element({ attributes })
			) : (
				<div {...attributes}>{children ? children : !itemState.highlighted ? empty : itemState.half ? half : full}</div>
			)}
		</RatingGroupItemContext.Provider>
	);
}
