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
				<Segment name="align" value={align} onValueChange={setAlign}>
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
			</section>
			<section className="space-y-4">
				<pre className="pre">{size}</pre>
				<Segment name="size" value={size} onValueChange={setSize}>
					<Segment.Item value="sm">sm</Segment.Item>
					<Segment.Item value="md">md</Segment.Item>
					<Segment.Item value="lg" disabled>
						lg
					</Segment.Item>
				</Segment>
			</section>
			{/* Vertical */}
			<section className="space-y-4">
				<h2 className="h2">Vertical</h2>
				<pre className="pre">{size}</pre>
				<Segment name="size-vertical" value={size} onValueChange={setSize} orientation="vertical">
					<Segment.Item value="sm">sm</Segment.Item>
					<Segment.Item value="md">md</Segment.Item>
					<Segment.Item value="lg" disabled>
						lg
					</Segment.Item>
				</Segment>
			</section>
			{/* Disabled */}
			<section className="space-y-4">
				<h2 className="h2">Disabled</h2>
				<Segment name="align" value={align} onValueChange={setAlign} disabled>
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
			</section>
			{/* Read-Only */}
			<section className="space-y-4">
				<h2 className="h2">Read-Only</h2>
				<Segment name="align" value={align} onValueChange={setAlign} readOnly>
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
			</section>
		</div>
	);
}
