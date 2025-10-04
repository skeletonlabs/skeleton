import { SegmentedControl } from '@skeletonlabs/skeleton-react';
import { AlignStartVerticalIcon, AlignCenterVerticalIcon, AlignEndVerticalIcon } from 'lucide-react';

export default function Icons() {
	return (
		<SegmentedControl defaultValue="start">
			<SegmentedControl.Control>
				<SegmentedControl.Indicator />
				<SegmentedControl.Item value="start">
					<SegmentedControl.ItemText>
						<AlignStartVerticalIcon />
					</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
				<SegmentedControl.Item value="center">
					<SegmentedControl.ItemText>
						<AlignCenterVerticalIcon />
					</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
				<SegmentedControl.Item value="end">
					<SegmentedControl.ItemText>
						<AlignEndVerticalIcon />
					</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
			</SegmentedControl.Control>
		</SegmentedControl>
	);
}
