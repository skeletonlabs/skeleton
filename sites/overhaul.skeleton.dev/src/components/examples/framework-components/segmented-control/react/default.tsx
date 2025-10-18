import { SegmentedControl } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<SegmentedControl defaultValue="item-1">
			<SegmentedControl.Label>Label</SegmentedControl.Label>
			<SegmentedControl.Control>
				<SegmentedControl.Indicator />
				<SegmentedControl.Item value="item-1">
					<SegmentedControl.ItemText>Item 1</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
				<SegmentedControl.Item value="item-2">
					<SegmentedControl.ItemText>Item 2</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
				<SegmentedControl.Item value="item-3">
					<SegmentedControl.ItemText>Item 3</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
			</SegmentedControl.Control>
		</SegmentedControl>
	);
}
