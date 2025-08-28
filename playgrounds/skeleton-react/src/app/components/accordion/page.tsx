'use client';

import { Club, Diamond, Heart, Spade } from 'lucide-react';
import { useState } from 'react';
import { Accordion } from '@skeletonlabs/skeleton-react';

export default function Page() {
	const [valueDefault, setValueDefault] = useState(['club']);
	const [valueMultiple, setValueMultiple] = useState(['club']);
	const [valueCollapsible, setValueCollapsible] = useState(['club']);

	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';

	const exampleItems = [
		{ icon: Club, value: 'club', title: 'Club', content: lorem },
		{ icon: Diamond, value: 'diamond', title: 'Diamond', content: lorem },
		{ icon: Heart, value: 'heart', title: 'Heart', content: lorem },
		{ icon: Spade, value: 'space', title: 'Spade', content: lorem }
	];
	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Accordion</h1>
			</header>
			<section className="space-y-4">
				<pre className="pre">{JSON.stringify(valueDefault)}</pre>
				<Accordion value={valueDefault} onValueChange={(e) => setValueDefault(e.value)}>
					{exampleItems.map((item, i) => (
						<div className="flex flex-col gap-2" key={item.value}>
							<Accordion.Item value={item.value}>
								<Accordion.Control lead={<item.icon />}>{item.title}</Accordion.Control>
								<Accordion.Panel>{item.content}</Accordion.Panel>
							</Accordion.Item>
							{i < exampleItems.length - 1 && <hr className="hr" />}
						</div>
					))}
				</Accordion>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Collapsible</h2>
				<pre className="pre">{JSON.stringify(valueCollapsible)}</pre>
				<Accordion value={valueCollapsible} onValueChange={(e) => setValueCollapsible(e.value)} collapsible>
					{exampleItems.map((item, i) => (
						<div className="flex flex-col gap-2" key={item.value}>
							<Accordion.Item value={item.value}>
								<Accordion.Control lead={<item.icon />}>{item.title}</Accordion.Control>
								<Accordion.Panel>{item.content}</Accordion.Panel>
							</Accordion.Item>
							{i < exampleItems.length - 1 && <hr className="hr" />}
						</div>
					))}
				</Accordion>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Multiple</h2>
				<pre className="pre">{JSON.stringify(valueMultiple)}</pre>
				<Accordion value={valueMultiple} onValueChange={(e) => setValueMultiple(e.value)} multiple>
					{exampleItems.map((item, i) => (
						<div className="flex flex-col gap-2" key={item.value}>
							<Accordion.Item value={item.value}>
								<Accordion.Control lead={<item.icon />}>{item.title}</Accordion.Control>
								<Accordion.Panel>{item.content}</Accordion.Panel>
							</Accordion.Item>
							{i < exampleItems.length - 1 && <hr className="hr" />}
						</div>
					))}
				</Accordion>
			</section>
		</div>
	);
}
