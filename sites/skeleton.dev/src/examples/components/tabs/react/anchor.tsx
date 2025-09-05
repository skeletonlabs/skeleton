'use client';

import { Tabs } from '@skeletonlabs/skeleton-react';

export default function () {
	return (
		<Tabs defaultValue="tab-1">
			<Tabs.List>
				<Tabs.Trigger
					value="tab-1"
					element={({ attributes }) => (
						<a href="#tab-1" {...attributes}>
							Tab 1
						</a>
					)}
				/>
				<Tabs.Trigger
					value="tab-2"
					element={({ attributes }) => (
						<a href="#tab-2" {...attributes}>
							Tab 2
						</a>
					)}
				/>
				<Tabs.Trigger
					value="tab-3"
					element={({ attributes }) => (
						<a href="#tab-3" {...attributes}>
							Tab 3
						</a>
					)}
				/>
				<Tabs.Indicator />
			</Tabs.List>
			<Tabs.Content value="tab-1">Content for Tab 1</Tabs.Content>
			<Tabs.Content value="tab-2">Content for Tab 2</Tabs.Content>
			<Tabs.Content value="tab-3">Content for Tab 3</Tabs.Content>
		</Tabs>
	);
}
