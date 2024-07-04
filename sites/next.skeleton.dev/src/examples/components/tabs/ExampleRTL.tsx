import React, { useState } from 'react';
import { Tabs } from '@skeletonlabs/skeleton-react';
import { LibraryBig, Film, Tv } from 'lucide-react';

export const Page: React.FC = () => {
	const [group, setGroup] = useState('books');
	return (
		<div dir="rtl" className="w-full">
			<Tabs>
				<Tabs.List>
					<Tabs.Control name="books" group={group} onChange={setGroup} title="Books">
						<LibraryBig size={20} />
						Books
					</Tabs.Control>
					<Tabs.Control name="movies" group={group} onChange={setGroup} title="Movies">
						<Film size={20} />
						Movies
					</Tabs.Control>
					<Tabs.Control name="television" group={group} onChange={setGroup} title="Tv">
						<Tv size={20} />
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
		</div>
	);
};
