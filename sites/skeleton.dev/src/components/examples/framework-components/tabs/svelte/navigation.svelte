<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import { navigate } from 'astro:transitions/client';

	// Replace getting the URL with your framework's method of accessing the current URL
	const props: { url: URL } = $props();
</script>

<div class="flex flex-col gap-4">
	<span>Current path: <code class="code">{props.url.pathname + props.url.pathname}</code></span>
	<!-- Replace `navigate` with your framework's navigation function -->
	<Tabs value={props.url.pathname + props.url.pathname} navigate={(details) => navigate(details.value)}>
		<Tabs.List>
			<Tabs.Trigger value="#overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="#features">Features</Tabs.Trigger>
			<Tabs.Trigger value="#activity">Activity</Tabs.Trigger>
			<Tabs.Indicator />
		</Tabs.List>
		<Tabs.Content value="#overview">
			A concise overview of the project: usage, goals, and recent highlights. Use this area to orient readers with key metrics and links to
			deeper docs.
		</Tabs.Content>
		<Tabs.Content value="#features">
			List the most important features here with short, pragmatic descriptions so readers can scan for what matters (accessibility, theming,
			integrations).
		</Tabs.Content>
		<Tabs.Content value="#activity">
			Show recent activity or sample data: new releases, PRs merged, or notable user events. This helps examples feel realistic and
			actionable.
		</Tabs.Content>
	</Tabs>
</div>
