import { useContext, type ReactNode } from 'react';
import type { ItemState } from '@zag-js/rating-group';
import { RatingGroupItemContext } from './rating-group-item-context.js';

export interface RatingGroupItemContextProps {
	children: (itemState: ItemState) => ReactNode;
}

export default function (props: RatingGroupItemContextProps) {
	const itemContext = useContext(RatingGroupItemContext);
	return props.children(itemContext.itemState);
}
