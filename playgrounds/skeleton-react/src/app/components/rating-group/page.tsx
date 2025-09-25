'use client';

import { RatingGroup } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<RatingGroup count={10} allowHalf defaultValue={7.5}>
			<RatingGroup.Control>
				<RatingGroup.Context>
					{(ratingGroup) => ratingGroup.items.map((index) => <RatingGroup.Item key={index} index={index} />)}
				</RatingGroup.Context>
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	);
}
