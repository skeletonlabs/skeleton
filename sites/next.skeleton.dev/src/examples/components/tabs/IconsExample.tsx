import React, { useState } from 'react';
import { Tabs, TabsList, TabsControl } from '@skeletonlabs/skeleton-react';
import { LibraryBig, Film, Tv } from 'lucide-react';

export const Page: React.FC<any> = () => {
	const [group, setGroup] = useState('books');
	return (
		<Tabs>
			<Tabs.List>
				<TabsList.Control name="books" group={group} onchange={setGroup} title="Books">
					<TabsControl.Item>
						<LibraryBig size={20} />
						Books
					</TabsControl.Item>
				</TabsList.Control>
				<TabsList.Control name="movies" group={group} onchange={setGroup} title="Movies">
					<TabsControl.Item>
						<Film size={20} />
						Movies
					</TabsControl.Item>
				</TabsList.Control>
				<TabsList.Control name="television" group={group} onchange={setGroup} title="Tv">
					<TabsControl.Item>
						<Tv size={20} />
						Television
					</TabsControl.Item>
				</TabsList.Control>
			</Tabs.List>
			<Tabs.Panel group={group} value="books">
				Books are like magical portals that take you on adventures, teach you new things, and make your
				imagination soar!
			</Tabs.Panel>
			<Tabs.Panel group={group} value="movies">
				Movies are like colorful, moving storybooks that come to life on a screen, showing exciting adventures
				and characters!
			</Tabs.Panel>
			<Tabs.Panel group={group} value="television">
				Television is like a window to a world of entertaining shows and educational programs that can spark
				curiosity and creativity in young minds.
			</Tabs.Panel>
		</Tabs>
	);
};
