import { SegmentedControl } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function Controlled() {
	const [value, setValue] = useState<string | null>('item-1');

	return (
		<div className="flex flex-col items-center gap-4">
			<SegmentedControl value={value} onValueChange={(details) => setValue(details.value)}>
				<SegmentedControl.Control>
					<SegmentedControl.Indicator />
					{['item-1', 'item-2', 'item-3'].map((item) => (
						<SegmentedControl.Item value={item} key={item}>
							<SegmentedControl.ItemText>{item}</SegmentedControl.ItemText>
							<SegmentedControl.ItemHiddenInput />
						</SegmentedControl.Item>
					))}
				</SegmentedControl.Control>
			</SegmentedControl>
			<pre className="pre">{value}</pre>
		</div>
	);
}
