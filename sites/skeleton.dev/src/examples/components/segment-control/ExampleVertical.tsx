import React, { useState } from 'react';
import { Segment } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [size, setSize] = useState('sm');

	return (
		<Segment name="size" value={size} onValueChange={(e) => setSize(e.value!)} orientation="vertical">
			<Segment.Item value="sm">Small</Segment.Item>
			<Segment.Item value="md">Medium</Segment.Item>
			<Segment.Item value="lg">Large</Segment.Item>
		</Segment>
	);
};
