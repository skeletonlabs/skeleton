import { RatingGroup } from '../../../src/index.js';

export default function Test() {
	return (
		<RatingGroup data-testid="root">
			<RatingGroup.Label data-testid="label">Label</RatingGroup.Label>
			<RatingGroup.Control data-testid="control">
				<RatingGroup.Item index={1} data-testid="item" />
			</RatingGroup.Control>
			<RatingGroup.HiddenInput data-testid="hidden-input" />
		</RatingGroup>
	);
}
