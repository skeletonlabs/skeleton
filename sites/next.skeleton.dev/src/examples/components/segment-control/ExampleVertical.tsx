import React, { useState } from 'react';
import { Segment } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [size, setSize] = useState('sm');

	return (
		<Segment value={size} name="size" flexDirection="flex-col" onChange={setSize}>
			<Segment.Item id="sm" value="sm">
				Small
			</Segment.Item>
			<Segment.Item id="md" value="md">
				Medium
			</Segment.Item>
			<Segment.Item id="lg" value="lg" disabled>
				Large
			</Segment.Item>
		</Segment>
	);
};
