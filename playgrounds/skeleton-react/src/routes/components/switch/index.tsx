'use client';

import { Switch } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/switch/')({
	component: Page,
});

function Page() {
	return (
		<Switch>
			<Switch.HiddenInput />
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.Label>Label</Switch.Label>
		</Switch>
	);
}
