import StarEmpty from '../../../internal/components/star-empty.jsx';
import StarFull from '../../../internal/components/star-full.jsx';
import StarHalf from '../../../internal/components/star-half.jsx';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { splitItemProps } from '@zag-js/rating-group';
import type { ItemProps } from '@zag-js/rating-group';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface RatingGroupItemProps extends ItemProps, PropsWithElement<'span'>, HTMLAttributes<'span', 'id' | 'dir'> {
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

export default function Item(props: RatingGroupItemProps) {
	const ratingGroup = use(RootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, empty = <StarEmpty />, half = <StarHalf />, full = <StarFull />, ...rest } = componentProps;

	const itemState = ratingGroup.getItemState(itemProps);

	const attributes = mergeProps(
		ratingGroup.getItemProps(itemProps),
		rest,
	);

	return element ? (
		element(attributes)
	) : (
		<div {...attributes}>{children ? children : !itemState.highlighted ? empty : itemState.half ? half : full}</div>
	);
}
