'use client';

import { Collapsible } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/collapsible/')({
	component: Page,
});

function Page() {
	return (
		<Collapsible>
			<Collapsible.Trigger>Toggle</Collapsible.Trigger>
			<Collapsible.Content>Content</Collapsible.Content>
		</Collapsible>
	)
}
