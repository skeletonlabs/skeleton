import React, { useState } from 'react';
import { Segment } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [size, setSize] = useState('sm');

	return (
		<Segment flexDirection="flex-col">
			<Segment.Item group={size} name="size" id="sm" value="sm" onChange={setSize}>
				Small
			</Segment.Item>
			<Segment.Item group={size} name="size" id="md" value="md" onChange={setSize}>
				Medium
			</Segment.Item>
			<Segment.Item group={size} name="size" id="lg" value="lg" onChange={setSize} disabled>
				Large
			</Segment.Item>
		</Segment>
	);
};
