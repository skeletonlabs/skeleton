import React, { useState } from 'react';
import { Segment } from '@skeletonlabs/skeleton-react';
import { AlignLeft as IconLeft, AlignCenter as IconCenter, AlignRight as IconRight, AlignJustify as IconJustify } from 'lucide-react';

export const Page: React.FC = () => {
	const [align, setAlign] = useState('left');

	return (
		<Segment value={align} name="align" onValueChange={(e) => setAlign(e.value!)}>
			<Segment.Item value="left">
				<IconLeft />
			</Segment.Item>
			<Segment.Item value="center">
				<IconCenter />
			</Segment.Item>
			<Segment.Item value="right">
				<IconRight />
			</Segment.Item>
			<Segment.Item value="justify">
				<IconJustify />
			</Segment.Item>
		</Segment>
	);
};
