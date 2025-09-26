import { ProgressCircular } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<ProgressCircular value={null}>
			<ProgressCircular.Circle style={{ ['--size' as string]: '4rem', ['--thickness' as string]: '0.5rem' }}>
				<ProgressCircular.Track />
				<ProgressCircular.Range />
			</ProgressCircular.Circle>
			<ProgressCircular.ValueText />
		</ProgressCircular>
	);
}
