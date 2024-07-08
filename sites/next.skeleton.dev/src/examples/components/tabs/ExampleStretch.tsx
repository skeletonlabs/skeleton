import React, { useState } from 'react';
import { Tabs } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [group, setGroup] = useState('books');
	return (
		<Tabs>
			<Tabs.List>
				<Tabs.Control name="books" group={group} onChange={setGroup} width="w-full">
					Books
				</Tabs.Control>
				<Tabs.Control name="movies" group={group} onChange={setGroup} width="w-full">
					Movies
				</Tabs.Control>
				<Tabs.Control name="television" group={group} onChange={setGroup} width="w-full">
					Television
				</Tabs.Control>
			</Tabs.List>
			<Tabs.Panels>
				<Tabs.Panel group={group} value="books">
					Books tab content
				</Tabs.Panel>
				<Tabs.Panel group={group} value="movies">
					Movies tab content
				</Tabs.Panel>
				<Tabs.Panel group={group} value="television">
					Television tab content
				</Tabs.Panel>
			</Tabs.Panels>
		</Tabs>
	);
};
