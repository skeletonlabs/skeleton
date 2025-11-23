<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
</script>

<Tabs defaultValue="overview">
	<Tabs.List>
		<Tabs.Trigger value="overview">
			{#snippet element(attributes: Record<string, unknown>)}
				<a href="#overview" {...attributes}>Overview</a>
			{/snippet}
		</Tabs.Trigger>
		<Tabs.Trigger value="features">
			{#snippet element(attributes: Record<string, unknown>)}
				<a href="#features" {...attributes}>Key features</a>
			{/snippet}
		</Tabs.Trigger>
		<Tabs.Trigger value="activity">
			{#snippet element(attributes: Record<string, unknown>)}
				<a href="#activity" {...attributes}>Activity</a>
			{/snippet}
		</Tabs.Trigger>
		<Tabs.Indicator />
	</Tabs.List>
	<Tabs.Content value="overview">
		A concise overview of the project: usage, goals, and recent highlights. Use this area to orient readers with key metrics and links to
		deeper docs.
	</Tabs.Content>
	<Tabs.Content value="features">
		List the most important features here with short, pragmatic descriptions so readers can scan for what matters (accessibility, theming,
		integrations).
	</Tabs.Content>
	<Tabs.Content value="activity">
		Show recent activity or sample data: new releases, PRs merged, or notable user events. This helps examples feel realistic and
		actionable.
	</Tabs.Content>
</Tabs>
