import { Plane, Hotel, Box } from 'lucide-react';
import { useState } from 'react';

import { Tabs } from '$lib/components/Tabs/Tabs.js';

export function Component() {
	const [group, setGroup] = useState('flight');

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Tabs</h1>
			</header>
			{/* Default */}
			<section className="space-y-4">
				<Tabs>
					<Tabs.List>
						<Tabs.Control
							name="flight"
							group={group}
							onChange={setGroup}
							onClick={() => console.log('onClick')}
							onKeydown={() => console.log('onKeyDown')}
						>
							Flight
						</Tabs.Control>
						<Tabs.Control name="hotel" group={group} onChange={setGroup}>
							Hotel
						</Tabs.Control>
						<Tabs.Control name="explore" group={group} onChange={setGroup}>
							Explore
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panels>
						<Tabs.Panel group={group} value="flight">
							Flight Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="hotel">
							Hotel Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="explore">
							Explore Panel
						</Tabs.Panel>
					</Tabs.Panels>
				</Tabs>
			</section>
			{/* Icon + Label */}
			<section className="space-y-4">
				<h2 className="h2">Icon + Label</h2>
				<Tabs>
					<Tabs.List>
						<Tabs.Control name="flight" group={group} title="flight" onChange={setGroup}>
							<Plane size={20} />
							<span>Flight</span>
						</Tabs.Control>
						<Tabs.Control name="hotel" title="hotel" group={group} onChange={setGroup}>
							<Hotel size={20} />
							<span>Hotel</span>
						</Tabs.Control>
						<Tabs.Control name="explore" title="explore" group={group} onChange={setGroup}>
							<Box size={20} />
							<span>Explore</span>
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panels>
						<Tabs.Panel group={group} value="flight">
							Flight Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="hotel">
							Hotel Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="explore">
							Explore Panel
						</Tabs.Panel>
					</Tabs.Panels>
				</Tabs>
			</section>
			{/* Icon Only */}
			<section className="space-y-4">
				<h2 className="h2">Icon Only</h2>
				<Tabs>
					<Tabs.List>
						<Tabs.Control name="flight" group={group} title="flight" onChange={setGroup}>
							<Plane size={20} />
						</Tabs.Control>
						<Tabs.Control name="hotel" title="hotel" group={group} onChange={setGroup}>
							<Hotel size={20} />
						</Tabs.Control>
						<Tabs.Control name="explore" title="explore" group={group} onChange={setGroup}>
							<Box size={20} />
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panels>
						<Tabs.Panel group={group} value="flight">
							Flight Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="hotel">
							Hotel Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="explore">
							Explore Panel
						</Tabs.Panel>
					</Tabs.Panels>
				</Tabs>
			</section>
			{/* Fluid */}
			<section className="space-y-4">
				<h2 className="h2">Fluid</h2>
				<Tabs>
					<Tabs.List>
						<Tabs.Control name="flight" group={group} onChange={setGroup} width="w-full">
							Flight
						</Tabs.Control>
						<Tabs.Control name="hotel" group={group} onChange={setGroup} width="w-full">
							Hotel
						</Tabs.Control>
						<Tabs.Control name="explore" group={group} onChange={setGroup} width="w-full">
							Explore
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panels>
						<Tabs.Panel group={group} value="flight">
							Flight Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="hotel">
							Hotel Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="explore">
							Explore Panel
						</Tabs.Panel>
					</Tabs.Panels>
				</Tabs>
			</section>
			{/* Justified */}
			<section className="space-y-4">
				<h2 className="h2">Justify</h2>
				<Tabs>
					<Tabs.List justify="justify-center">
						<Tabs.Control name="flight" group={group} onChange={setGroup}>
							Flight
						</Tabs.Control>
						<Tabs.Control name="hotel" group={group} onChange={setGroup}>
							Hotel
						</Tabs.Control>
						<Tabs.Control name="explore" group={group} onChange={setGroup}>
							Explore
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panels>
						<Tabs.Panel group={group} value="flight">
							Flight Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="hotel">
							Hotel Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="explore">
							Explore Panel
						</Tabs.Panel>
					</Tabs.Panels>
				</Tabs>
				<Tabs>
					<Tabs.List justify="justify-end">
						<Tabs.Control name="flight" group={group} onChange={setGroup}>
							Flight
						</Tabs.Control>
						<Tabs.Control name="hotel" group={group} onChange={setGroup}>
							Hotel
						</Tabs.Control>
						<Tabs.Control name="explore" group={group} onChange={setGroup}>
							Explore
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panels>
						<Tabs.Panel group={group} value="flight">
							Flight Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="hotel">
							Hotel Panel
						</Tabs.Panel>
						<Tabs.Panel group={group} value="explore">
							Explore Panel
						</Tabs.Panel>
					</Tabs.Panels>
				</Tabs>
			</section>
			{/* Focus */}
			<section className="space-y-4">
				<h2 className="h2">Focus</h2>
				<Tabs>
					<Tabs.List>
						<Tabs.Control name="flight" group={group} onChange={setGroup}>
							Flight
						</Tabs.Control>
						<Tabs.Control name="hotel" group={group} onChange={setGroup}>
							Hotel
						</Tabs.Control>
						<Tabs.Control name="explore" group={group} onChange={setGroup}>
							Explore
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panels>
						<Tabs.Panel group={group} value="flight">
							<button type="button" className="btn preset-filled">
								Book a Flight
							</button>
						</Tabs.Panel>
						<Tabs.Panel group={group} value="hotel">
							<button type="button" className="btn preset-filled">
								See Hotels near you
							</button>
						</Tabs.Panel>
						<Tabs.Panel group={group} value="explore">
							<button type="button" className="btn preset-filled">
								Explore
							</button>
						</Tabs.Panel>
					</Tabs.Panels>
				</Tabs>
			</section>
			{/* RTL */}
			<section className="space-y-4">
				<h2 className="h2">RTL</h2>
				<div dir="rtl">
					<Tabs>
						<Tabs.List>
							<Tabs.Control name="flight" group={group} onChange={setGroup}>
								Flight
							</Tabs.Control>
							<Tabs.Control name="hotel" group={group} onChange={setGroup}>
								Hotel
							</Tabs.Control>
							<Tabs.Control name="explore" group={group} onChange={setGroup}>
								Explore
							</Tabs.Control>
						</Tabs.List>
						<Tabs.Panels>
							<Tabs.Panel group={group} value="flight">
								Flight Panel{' '}
							</Tabs.Panel>
							<Tabs.Panel group={group} value="hotel">
								Hotel Panel{' '}
							</Tabs.Panel>
							<Tabs.Panel group={group} value="explore">
								Explore Panel
							</Tabs.Panel>
						</Tabs.Panels>
					</Tabs>
				</div>
			</section>
		</div>
	);
}
