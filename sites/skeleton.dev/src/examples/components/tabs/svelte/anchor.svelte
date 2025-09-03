<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
</script>

<Tabs defaultValue="tab-1">
	<Tabs.List>
		<Tabs.Trigger value="tab-1">
			{#snippet element({ attributes })}
				<a href="#tab-1" {...attributes}>Tab 1</a>
			{/snippet}
		</Tabs.Trigger>
		<Tabs.Trigger value="tab-2">
			{#snippet element({ attributes })}
				<a href="#tab-2" {...attributes}>Tab 2</a>
			{/snippet}
		</Tabs.Trigger>
		<Tabs.Trigger value="tab-3">
			{#snippet element({ attributes })}
				<a href="#tab-3" {...attributes}>Tab 3</a>
			{/snippet}
		</Tabs.Trigger>
		<Tabs.Indicator />
	</Tabs.List>
	<Tabs.Content value="tab-1">Content for Tab 1</Tabs.Content>
	<Tabs.Content value="tab-2">Content for Tab 2</Tabs.Content>
	<Tabs.Content value="tab-3">Content for Tab 3</Tabs.Content>
</Tabs>
