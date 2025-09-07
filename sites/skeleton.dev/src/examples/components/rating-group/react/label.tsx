'use client';

import { RatingGroup } from '@skeletonlabs/skeleton-react';

export default function () {
	return (
		<RatingGroup count={5}>
			<RatingGroup.Label>Rate us:</RatingGroup.Label>
			<RatingGroup.Control>
				{Array.from({ length: 5 }).map((_, index) => (
					<RatingGroup.Item key={index} index={index + 1} />
				))}
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	);
}
