import React, { useState } from 'react';
import { Segment } from '@skeletonlabs/skeleton-react';
import { AlignLeft as IconLeft, AlignCenter as IconCenter, AlignRight as IconRight, AlignJustify as IconJustify } from 'lucide-react';

export const Page: React.FC = () => {
	const [align, setAlign] = useState('left');

	return (
		<Segment value={align} name="align" onChange={setAlign}>
			<Segment.Item id="left" value="left">
				<IconLeft />
			</Segment.Item>
			<Segment.Item id="center" value="center">
				<IconCenter />
			</Segment.Item>
			<Segment.Item id="right" value="right">
				<IconRight />
			</Segment.Item>
			<Segment.Item id="justify" value="justify">
				<IconJustify />
			</Segment.Item>
		</Segment>
	);
};
