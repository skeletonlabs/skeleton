import React, { useState } from 'react';
import { Tabs } from '@skeletonlabs/skeleton-react';
import { LibraryBig, Film, Tv } from 'lucide-react';

export const Page: React.FC = () => {
	const [group, setGroup] = useState('books');
	return (
		<Tabs>
			<Tabs.List>
				<Tabs.Control name="books" group={group} onChange={setGroup} title="Books">
					<Tabs.Item>
						<LibraryBig size={20} />
						Books
					</Tabs.Item>
				</Tabs.Control>
				<Tabs.Control name="movies" group={group} onChange={setGroup} title="Movies">
					<Tabs.Item>
						<Film size={20} />
						Movies
					</Tabs.Item>
				</Tabs.Control>
				<Tabs.Control name="television" group={group} onChange={setGroup} title="Tv">
					<Tabs.Item>
						<Tv size={20} />
						Television
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
