<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';

	// Use your framework to get a reference to the current URL
	let url = $state(new URL('/overview', 'https://example.com/'));
</script>

<div class="flex flex-col gap-4">
	<span>Current path: <code class="code">{url.pathname}</code></span>
	<Tabs
		value={url.pathname}
		navigate={(details) => {
			// Use your framework to update the current URL, e.g., via a `navigate` function
			url = new URL(details.value, 'https://example.com');
		}}
	>
		<Tabs.List>
			<Tabs.Trigger value="/overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="/features">Features</Tabs.Trigger>
			<Tabs.Trigger value="/activity">Activity</Tabs.Trigger>
			<Tabs.Indicator />
		</Tabs.List>
		<Tabs.Content value="/overview">
			A concise overview of the project: usage, goals, and recent highlights. Use this area to orient readers with key metrics and links to
			deeper docs.
		</Tabs.Content>
		<Tabs.Content value="/features">
			List the most important features here with short, pragmatic descriptions so readers can scan for what matters (accessibility, theming,
			integrations).
		</Tabs.Content>
		<Tabs.Content value="/activity">
			Show recent activity or sample data: new releases, PRs merged, or notable user events. This helps examples feel realistic and
			actionable.
		</Tabs.Content>
	</Tabs>
</div>
