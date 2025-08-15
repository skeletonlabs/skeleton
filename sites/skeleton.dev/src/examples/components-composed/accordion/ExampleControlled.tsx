'use client';

import { Accordion } from '@skeletonlabs/skeleton-react/composed';
import { useState } from 'react';

export default function () {
	const [value, setValue] = useState(['item-1']);
	return (
		<div className="grid gap-2">
			<Accordion value={value} onValueChange={(e) => setValue(e.value)}>
				<Accordion.Item value="item-1">
					<Accordion.Heading>
						<Accordion.Trigger>Item 1</Accordion.Trigger>
						<Accordion.Content>Content for Item 1</Accordion.Content>
					</Accordion.Heading>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Heading>
						<Accordion.Trigger>Item 2</Accordion.Trigger>
						<Accordion.Content>Content for Item 2</Accordion.Content>
					</Accordion.Heading>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Heading>
						<Accordion.Trigger>Item 3</Accordion.Trigger>
						<Accordion.Content>Content for Item 3</Accordion.Content>
					</Accordion.Heading>
				</Accordion.Item>
			</Accordion>
			<pre className="pre">{JSON.stringify(value)}</pre>
			<button onClick={() => setValue(['item-1'])} className="btn preset-filled">
				Reset
			</button>
		</div>
	);
}
