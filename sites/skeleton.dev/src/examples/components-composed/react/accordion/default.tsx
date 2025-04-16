'use client';

import { Accordion } from '@skeletonlabs/skeleton-react/composed';

export default function () {
	return (
		<Accordion>
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
	);
}
