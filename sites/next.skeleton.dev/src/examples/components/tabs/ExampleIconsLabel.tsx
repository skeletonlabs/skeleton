import React, { useState } from 'react';
import { Tabs } from '@skeletonlabs/skeleton-react';
import { Plane as IconPlane, Sailboat as IconBoat, Car as IconCar } from 'lucide-react';

export const Page: React.FC = () => {
	const [group, setGroup] = useState('item-1');
	const lorem =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.';

	return (
		<Tabs value={group} onValueChange={setGroup}>
			<Tabs.List>
				<Tabs.Control value="item-1" lead={<IconPlane size={20} />}>
					Control-1
				</Tabs.Control>
				<Tabs.Control value="item-2" lead={<IconBoat size={20} />}>
					Control-2
				</Tabs.Control>
				<Tabs.Control value="item-3" lead={<IconCar size={20} />}>
					Control-3
				</Tabs.Control>
			</Tabs.List>
			<Tabs.Content>
				<Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
				<Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
				<Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
			</Tabs.Content>
		</Tabs>
	);
};
