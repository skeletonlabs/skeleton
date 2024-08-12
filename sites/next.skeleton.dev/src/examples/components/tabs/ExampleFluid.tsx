import React, { useState } from 'react';
import { Tabs } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [group, setGroup] = useState('plane');
	const lorem =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.';
	return (
		<Tabs value={group} onValueChange={setGroup} fluid>
			<Tabs.List>
				<Tabs.Control value="plane">Plane</Tabs.Control>
				<Tabs.Control value="boat">Boat</Tabs.Control>
				<Tabs.Control value="car">Car</Tabs.Control>
			</Tabs.List>
			<Tabs.Content>
				<Tabs.Panel value="plane">Plane Panel - {lorem}</Tabs.Panel>
				<Tabs.Panel value="boat">Boat Panel - {lorem}</Tabs.Panel>
				<Tabs.Panel value="car">Car Panel - {lorem}</Tabs.Panel>
			</Tabs.Content>
		</Tabs>
	);
};
