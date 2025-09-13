'use client';

import { RatingGroup } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<RatingGroup count={5} disabled={true}>
			<RatingGroup.Control>
				<RatingGroup.Context>
					{(ratingGroup) => ratingGroup.items.map((index) => <RatingGroup.Item key={index} index={index} />)}
				</RatingGroup.Context>
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	);
}
