import React, { useState } from 'react';
import { Tabs } from '@skeletonlabs/skeleton-react';
import { Plane as IconPlane, Sailboat as IconBoat, Car as IconCar } from 'lucide-react';

export const Page: React.FC = () => {
	const [group, setGroup] = useState('plane');
	const lorem =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.';

	return (
		<Tabs value={group} onValueChange={(e) => setGroup(e.value!)}>
			<Tabs.List>
				<Tabs.Control value="plane">
					<IconPlane size={20} />
				</Tabs.Control>
				<Tabs.Control value="boat">
					<IconBoat size={20} />
				</Tabs.Control>
				<Tabs.Control value="car">
					<IconCar size={20} />
				</Tabs.Control>
			</Tabs.List>
			<Tabs.Content>
				<Tabs.Panel value="plane">Plane Panel - {lorem}</Tabs.Panel>
				<Tabs.Panel value="boat">Boat Panel - {lorem}</Tabs.Panel>
				<Tabs.Panel value="car">Car Panel - {lorem}</Tabs.Panel>
			</Tabs.Content>
		</Tabs>
	);
};
