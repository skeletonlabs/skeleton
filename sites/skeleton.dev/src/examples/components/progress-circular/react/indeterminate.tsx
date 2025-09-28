import { Progress } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Progress className="items-center w-fit" value={null}>
			<Progress.Circle style={{ ['--size' as string]: '4rem', ['--thickness' as string]: '0.5rem' }}>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
			<Progress.ValueText />
		</Progress>
	);
}
