import { useContext, type ReactNode } from 'react';
import { RatingGroupRootContext, type RatingGroupRootContextType } from '../modules/rating-group-root-context';

export interface RatingGroupRootContextProps {
	children: (context: RatingGroupRootContextType) => ReactNode;
}

export default function (props: RatingGroupRootContextProps) {
	const rootContext = useContext(RatingGroupRootContext);
	return props.children(rootContext);
}
