import React, { useState } from 'react';
import { Tabs } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [group, setGroup] = useState('books');
	return (
		<Tabs>
			<Tabs.List>
				<Tabs.Control name="books" group={group} onChange={setGroup}>
					Books
				</Tabs.Control>
				<Tabs.Control name="movies" group={group} onChange={setGroup}>
					Movies
				</Tabs.Control>
				<Tabs.Control name="television" group={group} onChange={setGroup}>
					Television
				</Tabs.Control>
			</Tabs.List>
			<Tabs.Panels>
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
			</Tabs.Panels>
		</Tabs>
	);
};
