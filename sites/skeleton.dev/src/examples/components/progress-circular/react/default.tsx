import { Progress } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Progress className="items-center w-fit">
			<Progress.Label>Label</Progress.Label>
			<Progress.Circle style={{ ['--size' as string]: '4rem', ['--thickness' as string]: '0.5rem' }}>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
			<Progress.ValueText />
		</Progress>
	);
}
