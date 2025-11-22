'use client';

import { Tabs } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/tabs/')({
	component: Page,
});

function Page() {
	return (
		<Tabs defaultValue="tab-1">
			<Tabs.List>
				<Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
				<Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
				<Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
				<Tabs.Indicator />
			</Tabs.List>
			<Tabs.Content value="tab-1">Content for Tab 1</Tabs.Content>
			<Tabs.Content value="tab-2">Content for Tab 2</Tabs.Content>
			<Tabs.Content value="tab-3">Content for Tab 3</Tabs.Content>
		</Tabs>
	)
}
