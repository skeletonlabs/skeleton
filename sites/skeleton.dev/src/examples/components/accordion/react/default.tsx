'use client';

import { useState } from 'react';
import { Accordion } from '@skeletonlabs/skeleton-react';
import { Club as IconClub, Diamond as IconDiamond, Heart as IconHeart, Spade as IconSpade } from 'lucide-react';

export default function () {
	const [value, setValue] = useState(['item-1']);
	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';

	return (
		<Accordion value={value} onValueChange={(e) => setValue(e.value)}>
			<Accordion.Item value="item-1">
				<Accordion.Heading>
					<Accordion.Trigger>
						<IconClub />
						<span>Club</span>
						<Accordion.Indicator>{value.includes('item-1') ? '-' : '+'}</Accordion.Indicator>
					</Accordion.Trigger>
					<Accordion.Content>{lorem}</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-2">
				<Accordion.Heading>
					<Accordion.Trigger>
						<IconDiamond />
						<span>Diamond</span>
						<Accordion.Indicator>{value.includes('item-2') ? '-' : '+'}</Accordion.Indicator>
					</Accordion.Trigger>
					<Accordion.Content>{lorem}</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-3">
				<Accordion.Heading>
					<Accordion.Trigger>
						<IconHeart />
						<span>Heart</span>
						<Accordion.Indicator>{value.includes('item-3') ? '-' : '+'}</Accordion.Indicator>
					</Accordion.Trigger>
					<Accordion.Content>{lorem}</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-4">
				<Accordion.Heading>
					<Accordion.Trigger>
						<IconSpade />
						<span>Spade</span>
						<Accordion.Indicator>{value.includes('item-4') ? '-' : '+'}</Accordion.Indicator>
					</Accordion.Trigger>
					<Accordion.Content>{lorem}</Accordion.Content>
				</Accordion.Heading>
			</Accordion.Item>
		</Accordion>
	);
}
