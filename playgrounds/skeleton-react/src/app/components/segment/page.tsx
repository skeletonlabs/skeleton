"use client";

import { Segment } from "@skeletonlabs/skeleton-react";
import {
	AlignCenter as IconCenter,
	AlignJustify as IconJustify,
	AlignLeft as IconLeft,
	AlignRight as IconRight,
} from "lucide-react";
import { useState } from "react";

export default function Page() {
	const [align, setAlign] = useState<string | null>("left");
	const [size, setSize] = useState<string | null>("sm");

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Segment Control</h1>
			</header>
			<section className="space-y-4">
				<pre className="pre">{align}</pre>
				<Segment
					name="align"
					value={align}
					onValueChange={(e) => setAlign(e.value)}
				>
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
				<Segment
					name="size"
					value={size}
					onValueChange={(e) => setSize(e.value)}
				>
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
				<Segment
					name="size-vertical"
					value={size}
					onValueChange={(e) => setSize(e.value)}
					orientation="vertical"
				>
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
				<Segment
					name="align"
					value={align}
					onValueChange={(e) => setAlign(e.value)}
					disabled
				>
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
				<Segment
					name="align"
					value={align}
					onValueChange={(e) => setAlign(e.value)}
					readOnly
				>
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
