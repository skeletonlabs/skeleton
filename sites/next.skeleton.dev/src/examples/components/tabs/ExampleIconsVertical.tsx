import React, { useState } from 'react';
import { Tabs } from '@skeletonlabs/skeleton-react';
import { LibraryBig, Film, Tv } from 'lucide-react';

export const Page: React.FC = () => {
	const [group, setGroup] = useState('books');
	return (
		<Tabs>
			<Tabs.List>
				<Tabs.Control name="books" group={group} onChange={setGroup} title="Books" contentClasses="flex-col">
					<LibraryBig size={20} />
					<span>Books</span>
				</Tabs.Control>
				<Tabs.Control name="movies" group={group} onChange={setGroup} title="Movies" contentClasses="flex-col">
					<Film size={20} />
					<span>Movies</span>
				</Tabs.Control>
				<Tabs.Control name="television" group={group} onChange={setGroup} title="Tv" contentClasses="flex-col">
					<Tv size={20} />
					<span>Television</span>
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
