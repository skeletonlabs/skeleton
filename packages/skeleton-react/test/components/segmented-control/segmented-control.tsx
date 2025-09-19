import { SegmentedControl } from '@/index';

export default function SegmentedControlTest() {
	return (
		<SegmentedControl data-testid="root">
			<SegmentedControl.Indicator data-testid="indicator" />
			<SegmentedControl.Item value="item-1" data-testid="item">
				<SegmentedControl.ItemText data-testid="item-text" />
				<SegmentedControl.ItemHiddenInput data-testid="item-hidden-input" />
			</SegmentedControl.Item>
		</SegmentedControl>
	);
}
