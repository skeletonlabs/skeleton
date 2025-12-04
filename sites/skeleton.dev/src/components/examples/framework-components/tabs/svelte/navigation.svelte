<script lang="ts">
	/**
	 * Because demonstrating navigation inside a code snippet is not feasible, this example uses local state to simulate URL path changes.
	 *
	 * In a real application, you would:
	 * - Replace the `url` variable with the `url` of the current page.
	 * - Replace `onValueChange={(details) => setUrl(details.value)}` with `navigate((details) => navigate(details.value))` using your framework's navigation method.
	 */
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let url = $state.raw('#overview');
</script>

<Tabs value={url} onValueChange={(details) => (url = details.value)}>
	<Tabs.List>
		<Tabs.Trigger value="#overview">
			{#snippet element(attributes)}
				<a {...attributes as HTMLAnchorAttributes} href="#overview">Overview</a>
			{/snippet}
		</Tabs.Trigger>
		<Tabs.Trigger value="#key-features">
			{#snippet element(attributes)}
				<a {...attributes as HTMLAnchorAttributes} href="#key-features">Key Features</a>
			{/snippet}
		</Tabs.Trigger>
		<Tabs.Trigger value="#activity">
			{#snippet element(attributes)}
				<a {...attributes as HTMLAnchorAttributes} href="#activity">Activity</a>
			{/snippet}
		</Tabs.Trigger>
		<Tabs.Indicator />
	</Tabs.List>
	<Tabs.Content value="#overview">
		A concise overview of the project: usage, goals, and recent highlights. Use this area to orient readers with key metrics and links to
		deeper docs.
	</Tabs.Content>
	<Tabs.Content value="#key-features">
		List the most important features here with short, pragmatic descriptions so readers can scan for what matters (accessibility, theming,
		integrations).
	</Tabs.Content>
	<Tabs.Content value="#activity">
		Show recent activity or sample data: new releases, PRs merged, or notable user events. This helps examples feel realistic and
		actionable.
	</Tabs.Content>
</Tabs>
