import { RatingGroup } from '../../../src/index.js';

export default function () {
	return (
		<RatingGroup count={3} data-testid="root">
			<RatingGroup.Label data-testid="label">Label</RatingGroup.Label>
			<RatingGroup.Control data-testid="control">
				<RatingGroup.Context>
					{(ctx) =>
						ctx.api.items.map((index) => (
							<RatingGroup.Item key={index} index={index} data-testid={`item-${index}`}>
								Item
							</RatingGroup.Item>
						))
					}
				</RatingGroup.Context>
			</RatingGroup.Control>
			<RatingGroup.HiddenInput data-testid="hidden-input" />
		</RatingGroup>
	);
}
