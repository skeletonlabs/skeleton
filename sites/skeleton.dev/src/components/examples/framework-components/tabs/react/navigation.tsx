import { Tabs } from '@skeletonlabs/skeleton-react';
import { navigate } from 'astro:transitions/client';

// Use your framework to get a reference to the current URL
export default function Navigation(props: { url: URL }) {
	return (
		<div className="flex flex-col gap-4">
			<span>
				Current path: <code className="code">{props.url.pathname + props.url.hash}</code>
			</span>
			<Tabs
				value={props.url.pathname + props.url.hash}
				// Replace `navigate` with your framework's navigation function
				navigate={(details) => navigate(details.value)}
			>
				<Tabs.List>
					<Tabs.Trigger value="/overview">Overview</Tabs.Trigger>
					<Tabs.Trigger value="/features">Features</Tabs.Trigger>
					<Tabs.Trigger value="/activity">Activity</Tabs.Trigger>
					<Tabs.Indicator />
				</Tabs.List>
				<Tabs.Content value="/overview">
					A concise overview of the project: usage, goals, and recent highlights. Use this area to orient readers with key metrics and links
					to deeper docs.
				</Tabs.Content>
				<Tabs.Content value="/features">
					List the most important features here with short, pragmatic descriptions so readers can scan for what matters (accessibility,
					theming, integrations).
				</Tabs.Content>
				<Tabs.Content value="/activity">
					Show recent activity or sample data: new releases, PRs merged, or notable user events. This helps examples feel realistic and
					actionable.
				</Tabs.Content>
			</Tabs>
		</div>
	);
}
