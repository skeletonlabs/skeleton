import { SegmentedControl } from '../../src/index.js';

export default function Test() {
	return (
		<SegmentedControl data-testid="root">
			<SegmentedControl.Label data-testid="label" />
			<SegmentedControl.Control data-testid="control">
				<SegmentedControl.Indicator data-testid="indicator" />
				<SegmentedControl.Item value="item-1" data-testid="item">
					<SegmentedControl.ItemText data-testid="item-text" />
					<SegmentedControl.ItemHiddenInput data-testid="item-hidden-input" />
				</SegmentedControl.Item>
			</SegmentedControl.Control>
		</SegmentedControl>
	);
}
