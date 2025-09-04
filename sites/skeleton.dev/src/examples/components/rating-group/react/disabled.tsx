'use client';

import { RatingGroup } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<RatingGroup count={5} disabled={true}>
			<RatingGroup.Control>
				{Array.from({ length: 5 }).map((_, index) => (
					<RatingGroup.Item key={index} index={index + 1} />
				))}
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	);
}
