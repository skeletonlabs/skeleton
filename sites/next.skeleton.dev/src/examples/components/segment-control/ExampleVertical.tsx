import React, { useState } from 'react';
import { Segment } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [size, setSize] = useState('sm');

	return (
		<Segment name="size" value={size} onValueChange={setSize} orientation="vertical">
			<Segment.Item value="sm">Small</Segment.Item>
			<Segment.Item value="md">Medium</Segment.Item>
			{/* disabled */}
			<Segment.Item value="lg">Large</Segment.Item>
		</Segment>
	);
};
