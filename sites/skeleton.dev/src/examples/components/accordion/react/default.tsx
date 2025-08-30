'use client';

import { Accordion } from '@skeletonlabs/skeleton-react';
import { Club as IconClub, Diamond as IconDiamond, Heart as IconHeart, Spade as IconSpade } from 'lucide-react';

export default function () {
	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';
	return (
		<Accordion>
			<Accordion.Item value="item-1">
				<Accordion.Heading>
					<Accordion.Trigger className="grid-cols-[auto_1fr_auto]">
						<IconClub />
						<span>Club</span>
						<Accordion.Indicator>
							<Accordion.Context>{(api) => (api.value.includes('item-1') ? '-' : '+')}</Accordion.Context>
						</Accordion.Indicator>
					</Accordion.Trigger>
					<Accordion.Content>{lorem}</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-2">
				<Accordion.Heading>
					<Accordion.Trigger className="grid-cols-[auto_1fr_auto]">
						<IconDiamond />
						<span>Diamond</span>
						<Accordion.Indicator>
							<Accordion.Context>{(api) => (api.value.includes('item-2') ? '-' : '+')}</Accordion.Context>
						</Accordion.Indicator>
					</Accordion.Trigger>
					<Accordion.Content>{lorem}</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-3">
				<Accordion.Heading>
					<Accordion.Trigger className="grid-cols-[auto_1fr_auto]">
						<IconHeart />
						<span>Heart</span>
						<Accordion.Indicator>
							<Accordion.Context>{(api) => (api.value.includes('item-3') ? '-' : '+')}</Accordion.Context>
						</Accordion.Indicator>
					</Accordion.Trigger>
					<Accordion.Content>{lorem}</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-4">
				<Accordion.Heading>
					<Accordion.Trigger className="grid-cols-[auto_1fr_auto]">
						<IconSpade />
						<span>Spade</span>
						<Accordion.Indicator>
							<Accordion.Context>{(api) => (api.value.includes('item-3') ? '-' : '+')}</Accordion.Context>
						</Accordion.Indicator>
					</Accordion.Trigger>
					<Accordion.Content>{lorem}</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
		</Accordion>
	);
}
