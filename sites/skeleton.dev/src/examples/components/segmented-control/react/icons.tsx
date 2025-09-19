import { SegmentedControl } from '@skeletonlabs/skeleton-react';
import { AlignStartHorizontalIcon, AlignCenterHorizontalIcon, AlignEndHorizontalIcon } from 'lucide-react';

export default function Icons() {
	return (
		<SegmentedControl defaultValue="start">
			<SegmentedControl.Indicator />
			<SegmentedControl.Item value="start">
				<SegmentedControl.ItemText>
					<AlignStartHorizontalIcon />
				</SegmentedControl.ItemText>
				<SegmentedControl.ItemHiddenInput />
			</SegmentedControl.Item>
			<SegmentedControl.Item value="center">
				<SegmentedControl.ItemText>
					<AlignCenterHorizontalIcon />
				</SegmentedControl.ItemText>
				<SegmentedControl.ItemHiddenInput />
			</SegmentedControl.Item>
			<SegmentedControl.Item value="end">
				<SegmentedControl.ItemText>
					<AlignEndHorizontalIcon />
				</SegmentedControl.ItemText>
				<SegmentedControl.ItemHiddenInput />
			</SegmentedControl.Item>
		</SegmentedControl>
	);
}
