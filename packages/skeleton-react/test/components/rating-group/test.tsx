import { RatingGroup } from '@/index';

export default function Test() {
	return (
		<RatingGroup count={3} data-testid="root">
			<RatingGroup.Label data-testid="label">Label</RatingGroup.Label>
			<RatingGroup.Control data-testid="control">
				<RatingGroup.Context>
					{(ratingGroup) =>
						ratingGroup.items.map((index) => (
							<RatingGroup.Item key={index} index={index} data-testid={`item-${index}`}>
								Item {index}
							</RatingGroup.Item>
						))
					}
				</RatingGroup.Context>
			</RatingGroup.Control>
			<RatingGroup.HiddenInput data-testid="hidden-input" />
		</RatingGroup>
	);
}
