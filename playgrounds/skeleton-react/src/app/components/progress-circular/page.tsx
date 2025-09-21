'use client';

import { ProgressCircular } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<ProgressCircular>
			<ProgressCircular.Label>Label</ProgressCircular.Label>
			<ProgressCircular.Circle style={{ ['--size' as string]: '4rem', ['--thickness' as string]: '0.5rem' }}>
				<ProgressCircular.Track />
				<ProgressCircular.Range />
			</ProgressCircular.Circle>
			<ProgressCircular.ValueText />
		</ProgressCircular>
	);
}
