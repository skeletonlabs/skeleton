import { RatingGroup } from '@skeletonlabs/skeleton-react';

export default function Dir() {
	return (
		<RatingGroup count={5} dir="rtl">
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
