import type { useRatingGroup } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface RatingGroupRootContextProps {
	children: (ratingGroup: ReturnType<typeof useRatingGroup>) => ReactNode;
}

export default function RootContext(props: RatingGroupRootContextProps) {
	const ratingGroup = use(RootContext_);

	const { children } = props;

	return children(ratingGroup);
}
