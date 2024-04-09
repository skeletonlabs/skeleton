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
				<button type="button" className="btn preset-filled">
					Book tab Content
				</button>
			</Tabs.Panel>
			<Tabs.Panel group={group} value="movies">
				<button type="button" className="btn preset-filled">
					Movies tab content
				</button>
			</Tabs.Panel>
			<Tabs.Panel group={group} value="television">
				<button type="button" className="btn preset-filled">
					Television tab content
				</button>
			</Tabs.Panel>
		</Tabs>
	);
};
