import { RatingGroup } from '@skeletonlabs/skeleton-react';

export default function Half() {
	return (
		<RatingGroup count={5} allowHalf>
			<RatingGroup.Control>
				<RatingGroup.Context>
					{(ratingGroup) => ratingGroup.items.map((index) => <RatingGroup.Item key={index} index={index} />)}
				</RatingGroup.Context>
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	);
}
