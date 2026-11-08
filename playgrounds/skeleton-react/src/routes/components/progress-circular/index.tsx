"use client";

import { Progress } from "@skeletonlabs/skeleton-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/components/progress-circular/")({
	component: Page,
});

function Page() {
	return (
		<Progress className="w-fit items-center">
			<Progress.Label>Label</Progress.Label>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
			<Progress.ValueText />
		</Progress>
	);
}
