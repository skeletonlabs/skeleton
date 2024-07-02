import { useState } from 'react';
import { Segment } from '../../lib/components/Segment/Segment.js';
import { AlignLeft as IconLeft, AlignCenter as IconCenter, AlignRight as IconRight, AlignJustify as IconJustify } from 'lucide-react';

export function Component() {
	const [align, setAlign] = useState('left');

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Segment Control</h1>
			</header>
			<section className="space-y-4">
				<pre className="pre">{align}</pre>
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
			</section>
		</div>
	);
}
