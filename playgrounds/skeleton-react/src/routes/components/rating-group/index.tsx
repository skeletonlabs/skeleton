'use client';

import { RatingGroup } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/rating-group/')({
	component: Page,
});

function Page() {
	return (
		<RatingGroup count={10} allowHalf defaultValue={7.5}>
			<RatingGroup.Label>Label</RatingGroup.Label>
			<RatingGroup.Control>
				<RatingGroup.Context>
					{(ratingGroup) => ratingGroup.items.map((index) => <RatingGroup.Item key={index} index={index} />)}
				</RatingGroup.Context>
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	);
}
