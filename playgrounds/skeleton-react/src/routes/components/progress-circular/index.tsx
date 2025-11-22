'use client';

import { Progress } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/progress-circular/')({
	component: Page,
});

function Page() {
	return (
		<Progress className="items-center w-fit">
			<Progress.Label>Label</Progress.Label>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
			<Progress.ValueText />
		</Progress>
	)
}
