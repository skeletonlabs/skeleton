import React, { useState } from 'react';
import { Segment } from '@skeletonlabs/skeleton-react';
import { AlignLeft as IconLeft, AlignCenter as IconCenter, AlignRight as IconRight, AlignJustify as IconJustify } from 'lucide-react';

export const Page: React.FC = () => {
	const [align, setAlign] = useState('left');

	return (
		<Segment>
			<Segment.Item group={align} name="align" id="left" value="left" onChange={setAlign}>
				<IconLeft />
			</Segment.Item>
			<Segment.Item group={align} name="align" id="center" value="center" onChange={setAlign}>
				<IconCenter />
			</Segment.Item>
			<Segment.Item group={align} name="align" id="right" value="right" onChange={setAlign}>
				<IconRight />
			</Segment.Item>
			<Segment.Item group={align} name="align" id="justify" value="justify" onChange={setAlign}>
				<IconJustify />
			</Segment.Item>
		</Segment>
	);
};
