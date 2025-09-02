<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
</script>

<Tabs defaultValue="tab-1">
	<Tabs.List>
		<Tabs.Trigger value="tab-1">
			<Tabs.Label>Tab 1</Tabs.Label>
		</Tabs.Trigger>
		<Tabs.Trigger value="tab-2">
			<Tabs.Label>Tab 2</Tabs.Label>
		</Tabs.Trigger>
		<Tabs.Trigger value="tab-3">
			<Tabs.Label>Tab 3</Tabs.Label>
		</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="tab-1">Content for Tab 1</Tabs.Content>
	<Tabs.Content value="tab-2">Content for Tab 2</Tabs.Content>
	<Tabs.Content value="tab-3">Content for Tab 3</Tabs.Content>
</Tabs>
