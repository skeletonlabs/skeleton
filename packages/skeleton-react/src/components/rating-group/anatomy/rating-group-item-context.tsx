import { useContext } from 'react';
import type { RatingGroupItemContextProps } from '../modules/types.js';
import { RatingGroupItemContext } from '../modules/context.js';

export default function (props: RatingGroupItemContextProps) {
	const itemContext = useContext(RatingGroupItemContext);
	return props.children(itemContext.itemState);
}
