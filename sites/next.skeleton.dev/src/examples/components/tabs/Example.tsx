import React, { useState } from 'react';
import { Tabs, TabsList, TabsControl } from '@skeletonlabs/skeleton-react';

export const Page: React.FC<any> = () => {
	const [group, setGroup] = useState('books');
	return (
		<Tabs>
			<Tabs.List>
				<TabsList.Control name="books" group={group} onchange={setGroup}>
					<TabsControl.Item>Books</TabsControl.Item>
				</TabsList.Control>
				<TabsList.Control name="movies" group={group} onchange={setGroup}>
					<TabsControl.Item>Movies</TabsControl.Item>
				</TabsList.Control>
				<TabsList.Control name="television" group={group} onchange={setGroup}>
					<TabsControl.Item>Television</TabsControl.Item>
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
