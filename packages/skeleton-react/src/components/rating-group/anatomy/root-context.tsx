import { RatingGroupRootContext } from '../modules/root-context';
import type { useRatingGroup } from '../modules/use-rating-group';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface RatingGroupRootContextProps {
	children: (ratingGroup: ReturnType<typeof useRatingGroup>) => ReactNode;
}

export default function RootContext(props: RatingGroupRootContextProps) {
	const ratingGroup = use(RatingGroupRootContext);

	const { children } = props;

	return children(ratingGroup);
}
