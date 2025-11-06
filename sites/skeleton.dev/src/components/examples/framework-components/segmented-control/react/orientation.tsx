import { SegmentedControl } from '@skeletonlabs/skeleton-react';

export default function Orientation() {
	return (
		<SegmentedControl defaultValue="music" orientation="vertical">
			<SegmentedControl.Control>
				<SegmentedControl.Indicator />
				<SegmentedControl.Item value="music">
					<SegmentedControl.ItemText>Music</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
				<SegmentedControl.Item value="images">
					<SegmentedControl.ItemText>Images</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
				<SegmentedControl.Item value="videos">
					<SegmentedControl.ItemText>Videos</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
			</SegmentedControl.Control>
		</SegmentedControl>
	);
}
