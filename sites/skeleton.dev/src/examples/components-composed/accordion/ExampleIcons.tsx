'use client';

import { Accordion } from '@skeletonlabs/skeleton-react/composed';
import { Club, Diamond, Heart, Spade } from 'lucide-react';

export default function () {
	return (
		<Accordion>
			<Accordion.Item value="item-1">
				<Accordion.Heading>
					<Accordion.Trigger className="flex items-center gap-4">
						Club
						<Club />
					</Accordion.Trigger>
					<Accordion.Content>Content for Item 1</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Heading>
					<Accordion.Trigger className="flex items-center gap-4">
						Diamond
						<Diamond />
					</Accordion.Trigger>
					<Accordion.Content>Content for Item 2</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Heading>
					<Accordion.Trigger className="flex items-center gap-4">
						Heart
						<Heart />
					</Accordion.Trigger>
					<Accordion.Content>Content for Item 3</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>

			<Accordion.Item value="item-4">
				<Accordion.Heading>
					<Accordion.Trigger className="flex items-center gap-4">
						Spade
						<Spade />
					</Accordion.Trigger>
					<Accordion.Content>Content for Item 4</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
		</Accordion>
	);
}
