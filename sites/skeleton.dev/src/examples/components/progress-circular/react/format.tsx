import { Progress } from '@skeletonlabs/skeleton-react';

export default function Format() {
	return (
		<Progress className="items-center w-fit" formatOptions={{ style: 'decimal' }}>
			<Progress.Circle style={{ ['--size' as string]: '4rem', ['--thickness' as string]: '0.5rem' }}>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
			<Progress.ValueText />
		</Progress>
	);
}
