import { Tabs } from '@skeletonlabs/skeleton-react';

export default function Dir() {
	return (
		<Tabs defaultValue="tab-1" dir="rtl">
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
	);
}
