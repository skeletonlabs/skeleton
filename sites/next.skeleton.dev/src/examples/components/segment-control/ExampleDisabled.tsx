import React, { useState } from 'react';
import { Segment } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [size, setSize] = useState('sm');

	return (
		<Segment>
			<Segment.Item group={size} name="size" id="sm" value="sm" onChange={setSize}>
				sm
			</Segment.Item>
			<Segment.Item group={size} name="size" id="md" value="md" onChange={setSize}>
				md
			</Segment.Item>
			<Segment.Item group={size} name="size" id="lg" value="lg" onChange={setSize} disabled>
				lg
			</Segment.Item>
		</Segment>
	);
};
