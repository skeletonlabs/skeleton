'use client';

import { Accordion } from '@skeletonlabs/skeleton-react';
import { Club as IconClub, Diamond as IconDiamond, Heart as IconHeart, Spade as IconSpade } from 'lucide-react';

export default function () {
	return (
		<Accordion>
			<Accordion.Item value="item-1">
				<Accordion.Heading>
					<Accordion.Trigger className="grid-cols-[1fr_auto]">
						<span>Club</span>
						<IconClub />
					</Accordion.Trigger>
					<Accordion.Content>Content for Item 1</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-2">
				<Accordion.Heading>
					<Accordion.Trigger className="grid-cols-[1fr_auto]">
						<span>Diamond</span>
						<IconDiamond />
					</Accordion.Trigger>
					<Accordion.Content>Content for Item 2</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-3">
				<Accordion.Heading>
					<Accordion.Trigger className="grid-cols-[1fr_auto]">
						<span>Heart</span>
						<IconHeart />
					</Accordion.Trigger>
					<Accordion.Content>Content for Item 3</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-4">
				<Accordion.Heading>
					<Accordion.Trigger className="grid-cols-[1fr_auto]">
						<span>Spade</span>
						<IconSpade />
					</Accordion.Trigger>
					<Accordion.Content>Content for Item 4</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
		</Accordion>
	);
}
