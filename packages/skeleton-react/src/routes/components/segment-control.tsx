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
			<section className="space-y-4">
				<pre className="pre">{size}</pre>
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
			</section>
			<section className="space-y-4">
				<h2 className="h2">Vertical</h2>
				<pre className="pre">{size}</pre>
				<Segment flexDirection="flex-col">
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
			</section>
		</div>
	);
}
