import React, { useState } from 'react';
import { Tabs, TabsList, TabsControl } from '@skeletonlabs/skeleton-react';


export const Page: React.FC<any> = () => {
    const [group, setGroup] = useState('books');
	return (
			<Tabs>
				<Tabs.List>
					<TabsList.Control name="books" group={group} onchange={setGroup} classes='w-full'>
							<TabsControl.Item>
								Books
							</TabsControl.Item>
					</TabsList.Control>
					<TabsList.Control name="movies" group={group} onchange={setGroup} classes='w-full'>
						<TabsControl.Item>
							Movies
						</TabsControl.Item>
					</TabsList.Control>
					<TabsList.Control name="television" group={group} onchange={setGroup} classes='w-full'>
						<TabsControl.Item>
							Television
						</TabsControl.Item>
					</TabsList.Control>
				</Tabs.List>
				<Tabs.Panel group={group} value="books">
					Books are like magical portals that take you on adventures, teach you new things, and make your imagination soar!
				</Tabs.Panel>
				<Tabs.Panel group={group} value="movies">
					Movies are like colorful, moving storybooks that come to life on a screen, showing exciting adventures and characters!
				</Tabs.Panel>
				<Tabs.Panel group={group} value="television">
					Television is like a window to a world of entertaining shows and educational programs that can spark curiosity and creativity in young minds.
				</Tabs.Panel>
			</Tabs>
	);
};
