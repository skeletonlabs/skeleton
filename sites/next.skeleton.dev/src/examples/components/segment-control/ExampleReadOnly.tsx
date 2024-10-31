import React, { useState } from 'react';
import { Segment } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [size, setSize] = useState('sm');

	return (
		<Segment name="size" value={size} onValueChange={setSize} readOnly>
			<Segment.Item value="sm">sm</Segment.Item>
			<Segment.Item value="md">md</Segment.Item>
			<Segment.Item value="lg">lg</Segment.Item>
		</Segment>
	);
};