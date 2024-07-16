import { useState } from 'react';
import { Segment } from '../../lib/components/Segment/Segment.js';
import { AlignLeft as IconLeft, AlignCenter as IconCenter, AlignRight as IconRight, AlignJustify as IconJustify } from 'lucide-react';

export function Component() {
	const [align, setAlign] = useState('left');
	const [size, setSize] = useState('sm');

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Segment Control</h1>
			</header>
			<section className="space-y-4">
				<pre className="pre">{align}</pre>
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
			</section>
			<section className="space-y-4">
				<pre className="pre">{size}</pre>
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
			</section>
			<section className="space-y-4">
				<h2 className="h2">Vertical</h2>
				<pre className="pre">{size}</pre>
				<Segment value={size} name="size" flexDirection="flex-col" onChange={setSize}>
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
			</section>
		</div>
	);
}
