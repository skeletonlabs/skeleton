import React, { useState } from 'react';
import { Tabs, TabsList, TabsControl } from '@skeletonlabs/skeleton-react';
import { LibraryBig, Film, Tv } from 'lucide-react';

export const Page: React.FC<any> = () => {
	const [group, setGroup] = useState('books');
	return (
		<Tabs>
			<Tabs.List>
				<TabsList.Control name="books" group={group} onchange={setGroup} title="Books">
					<TabsControl.Item classes="flex-col">
						<LibraryBig size={20} />
						Books
					</TabsControl.Item>
				</TabsList.Control>
				<TabsList.Control name="movies" group={group} onchange={setGroup} title="Movies">
					<TabsControl.Item classes="flex-col">
						<Film size={20} />
						Movies
					</TabsControl.Item>
				</TabsList.Control>
				<TabsList.Control name="television" group={group} onchange={setGroup} title="Tv">
					<TabsControl.Item classes="flex-col">
						<Tv size={20} />
						Television
					</TabsControl.Item>
				</TabsList.Control>
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
