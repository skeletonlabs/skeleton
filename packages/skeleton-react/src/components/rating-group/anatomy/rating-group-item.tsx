import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import { RatingGroupItemContext, RatingGroupRootContext } from '../modules/context.js';
import type { RatingGroupItemProps } from '../modules/types.js';
import * as ratingGroup from '@zag-js/rating-group';

export default function (props: RatingGroupItemProps) {
	const rootContext = useContext(RatingGroupRootContext);
	const [itemProps, componentProps] = ratingGroup.splitItemProps(props);
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
