import { RatingGroup } from '@skeletonlabs/skeleton-react';

export default function Label() {
	return (
		<RatingGroup count={5}>
			<RatingGroup.Label>Rate us:</RatingGroup.Label>
			<RatingGroup.Control>
				<RatingGroup.Context>
					{(ratingGroup) => ratingGroup.items.map((index) => <RatingGroup.Item key={index} index={index} />)}
				</RatingGroup.Context>
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	);
}
