import React, { useState } from 'react';
import { Tabs } from '@skeletonlabs/skeleton-react';
import { LibraryBig, Film, Tv } from 'lucide-react';

export const Page: React.FC = () => {
	const [group, setGroup] = useState('books');
	return (
		<Tabs>
			<Tabs.List justify="justify-center">
				<Tabs.Control name="books" group={group} onChange={setGroup}>
					<Tabs.Item>
						<LibraryBig size={20} />
					</Tabs.Item>
				</Tabs.Control>
				<Tabs.Control name="movies" group={group} onChange={setGroup}>
					<Tabs.Item>
						<Film size={20} />
					</Tabs.Item>
				</Tabs.Control>
				<Tabs.Control name="television" group={group} onChange={setGroup}>
					<Tabs.Item>
						<Tv size={20} />
					</Tabs.Item>
				</Tabs.Control>
			</Tabs.List>
			<Tabs.Panel group={group} value="books">
				Books tab content
			</Tabs.Panel>
			<Tabs.Panel group={group} value="movies">
				Movies tab content
			</Tabs.Panel>
			<Tabs.Panel group={group} value="television">
				Television tab content
			</Tabs.Panel>
		</Tabs>
	);
};
