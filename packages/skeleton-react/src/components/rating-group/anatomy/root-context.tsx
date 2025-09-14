import { use, type ReactNode } from 'react';
import { RatingGroupRootContext } from '../modules/root-context';
import type { useRatingGroup } from '../modules/use-rating-group';

export interface RatingGroupRootContextProps {
	children: (ratingGroup: ReturnType<typeof useRatingGroup>) => ReactNode;
}

export default function (props: RatingGroupRootContextProps) {
	const ratingGroup = use(RatingGroupRootContext);

	const { children } = props;

	return children(ratingGroup);
}
