'use client';

import { Progress } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Progress className="items-center w-fit">
			<Progress.Label>Label</Progress.Label>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
			<Progress.ValueText />
		</Progress>
	);
}
