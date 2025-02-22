import { Plane as IconPlane, Sailboat as IconBoat, Car as IconCar } from 'lucide-react';
import { useState } from 'react';

import { Tabs } from '@skeletonlabs/skeleton-react';

export default function Page() {
	const [group, setGroup] = useState('item-1');
	const lorem =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.';

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Tabs</h1>
			</header>
			{/* Default */}
			<section className="space-y-4">
				<pre className="pre">group: {JSON.stringify(group, null, 2)}</pre>
				<Tabs value={group} onValueChange={setGroup}>
					<Tabs.List>
						<Tabs.Control value="item-1">Control-1</Tabs.Control>
						<Tabs.Control value="item-2">Control-2</Tabs.Control>
						<Tabs.Control value="item-3">Control-3</Tabs.Control>
					</Tabs.List>
					<Tabs.Content>
						<Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
						<Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
						<Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
					</Tabs.Content>
				</Tabs>
			</section>
			{/* Icon + Label */}
			<section className="space-y-4">
				<h2 className="h2">Icon + Label</h2>
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
			</section>
			{/* Icon Only */}
			<section className="space-y-4">
				<h2 className="h2">Icon Only</h2>
				<Tabs value={group} onValueChange={setGroup}>
					<Tabs.List>
						<Tabs.Control value="item-1">
							<IconPlane size={20} />
						</Tabs.Control>
						<Tabs.Control value="item-2">
							<IconBoat size={20} />
						</Tabs.Control>
						<Tabs.Control value="item-3">
							<IconCar size={20} />
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Content>
						<Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
						<Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
						<Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
					</Tabs.Content>
				</Tabs>
			</section>
			{/* Fluid */}
			<section className="space-y-4">
				<h2 className="h2">Fluid</h2>
				<Tabs value={group} onValueChange={setGroup} fluid>
					<Tabs.List>
						<Tabs.Control value="item-1">Control-1</Tabs.Control>
						<Tabs.Control value="item-2">Control-2</Tabs.Control>
						<Tabs.Control value="item-3">Control-3</Tabs.Control>
					</Tabs.List>
					<Tabs.Content>
						<Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
						<Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
						<Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
					</Tabs.Content>
				</Tabs>
			</section>
			{/* Justify */}
			<section className="space-y-4">
				<h2 className="h2">Justify</h2>
				<Tabs value={group} onValueChange={setGroup}>
					<Tabs.List justify="justify-center">
						<Tabs.Control value="item-1">Control-1</Tabs.Control>
						<Tabs.Control value="item-2">Control-2</Tabs.Control>
						<Tabs.Control value="item-3">Control-3</Tabs.Control>
					</Tabs.List>
					<Tabs.Content>
						<Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
						<Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
						<Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
					</Tabs.Content>
				</Tabs>
				<Tabs value={group} onValueChange={setGroup}>
					<Tabs.List justify="justify-end">
						<Tabs.Control value="item-1">Control-1</Tabs.Control>
						<Tabs.Control value="item-2">Control-2</Tabs.Control>
						<Tabs.Control value="item-3">Control-3</Tabs.Control>
					</Tabs.List>
					<Tabs.Content>
						<Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
						<Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
						<Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
					</Tabs.Content>
				</Tabs>
			</section>
			{/* RTL */}
			<section className="space-y-4">
				<h2 className="h2">RTL</h2>
				<div dir="rtl">
					<Tabs value={group} onValueChange={setGroup} dir="rtl">
						<Tabs.List>
							<Tabs.Control value="item-1">Control-1</Tabs.Control>
							<Tabs.Control value="item-2">Control-2</Tabs.Control>
							<Tabs.Control value="item-3">Control-3</Tabs.Control>
						</Tabs.List>
						<Tabs.Content>
							<Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
							<Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
							<Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
						</Tabs.Content>
					</Tabs>
				</div>
			</section>
		</div>
	);
}
