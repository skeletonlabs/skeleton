import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { splitItemProps, type ItemProps } from '@zag-js/rating-group';
import { mergeProps } from '@zag-js/react';
import { useContext, type ReactNode } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { RatingGroupRootContext } from '../modules/root-context';
import StarEmpty from '@/internal/components/star-empty';
import StarHalf from '@/internal/components/star-half';
import StarFull from '@/internal/components/star-full';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface RatingGroupItemProps extends ItemProps, PropsWithElement<'span'>, HTMLAttributes<'span', 'id' | 'defaultValue' | 'dir'> {
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
	const ratingGroup = useContext(RatingGroupRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, empty = <StarEmpty />, half = <StarHalf />, full = <StarFull />, ...rest } = componentProps;

	const itemState = ratingGroup.getItemState(itemProps);

	const attributes = mergeProps(ratingGroup.getItemProps(itemProps), rest, {
		className: classesAccordion.item
	});

	return element ? (
		element(attributes)
	) : (
		<div {...attributes}>{children ? children : !itemState.highlighted ? empty : itemState.half ? half : full}</div>
	);
}
