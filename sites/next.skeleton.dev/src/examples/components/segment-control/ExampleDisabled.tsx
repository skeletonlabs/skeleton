import React, { useState } from 'react';
import { Segment } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [size, setSize] = useState('sm');

	return (
		<Segment value={size} name="size" onChange={setSize}>
			<Segment.Item id="sm" value="sm">
				sm
			</Segment.Item>
			<Segment.Item id="md" value="md">
				md
			</Segment.Item>
			<Segment.Item id="lg" value="lg" disabled>
				lg
			</Segment.Item>
		</Segment>
	);
};
