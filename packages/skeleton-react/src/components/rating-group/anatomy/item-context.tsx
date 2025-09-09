import { useContext, type ReactNode } from 'react';
import { RatingGroupItemContext, type RatingGroupItemContextType } from '../modules/item-context';

export interface RatingGroupItemContextProps {
	children: (context: RatingGroupItemContextType) => ReactNode;
}

export default function (props: RatingGroupItemContextProps) {
	const itemContext = useContext(RatingGroupItemContext);
	return props.children(itemContext);
}
