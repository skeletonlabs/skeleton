import { ProgressCircular } from '@skeletonlabs/skeleton-react';

export default function Format() {
	return (
		<ProgressCircular formatOptions={{ style: 'decimal' }}>
			<ProgressCircular.Circle style={{ ['--size' as string]: '4rem', ['--thickness' as string]: '0.5rem' }}>
				<ProgressCircular.Track />
				<ProgressCircular.Range />
			</ProgressCircular.Circle>
			<ProgressCircular.ValueText />
		</ProgressCircular>
	);
}
