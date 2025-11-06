import { SegmentedControl } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function Default() {
	const [value, setValue] = useState<string | null>('music');

	return (
		<div className="flex flex-col items-center gap-4">
			<SegmentedControl value={value} onValueChange={(details) => setValue(details.value)}>
				<SegmentedControl.Label>Label</SegmentedControl.Label>
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

			{/* Message */}
			<p>
				<span className="opacity-60">You selected</span> <code className="code">{value}</code>
			</p>
		</div>
	);
}
