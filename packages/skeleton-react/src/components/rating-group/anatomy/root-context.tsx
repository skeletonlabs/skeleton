import { useContext, type ReactNode } from 'react';
import { RatingGroupRootContext } from '../modules/root-context';
import type { Api } from '@zag-js/rating-group';

export interface RatingGroupRootContextProps {
	children: (ratingGroup: Api) => ReactNode;
}

export default function (props: RatingGroupRootContextProps) {
	const ratingGroup = useContext(RatingGroupRootContext);

	const { children } = props;

	return children(ratingGroup);
}
