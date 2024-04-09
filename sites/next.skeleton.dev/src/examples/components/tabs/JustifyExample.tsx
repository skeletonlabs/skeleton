import React, { useState } from 'react';
import { Tabs, TabsList, TabsControl } from '@skeletonlabs/skeleton-react';
import { LibraryBig, Film, Tv } from 'lucide-react';

export const Page: React.FC<any> = () => {
	const [group, setGroup] = useState('books');
	return (
		<Tabs>
			<Tabs.List justify="justify-center">
				<TabsList.Control name="books" group={group} onchange={setGroup}>
					<TabsControl.Item>
						<LibraryBig size={20} />
					</TabsControl.Item>
				</TabsList.Control>
				<TabsList.Control name="movies" group={group} onchange={setGroup}>
					<TabsControl.Item>
						<Film size={20} />
					</TabsControl.Item>
				</TabsList.Control>
				<TabsList.Control name="television" group={group} onchange={setGroup}>
					<TabsControl.Item>
						<Tv size={20} />
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
