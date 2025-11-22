'use client';

import { ToggleGroup } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/toggle-group/')({
	component: Page,
});

function Page() {
	return (
		<ToggleGroup defaultValue={['center']}>
			<ToggleGroup.Item value="left">Left</ToggleGroup.Item>
			<ToggleGroup.Item value="center">Center</ToggleGroup.Item>
			<ToggleGroup.Item value="right">Right</ToggleGroup.Item>
		</ToggleGroup>
	)
}
