import { Progress } from '@skeletonlabs/skeleton-react';

export default function CustomFormat() {
	return (
		<Progress className="items-center w-fit">
			<Progress.Circle style={{ ['--size' as string]: '4rem', ['--thickness' as string]: '0.5rem' }}>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
			<Progress.ValueText>
				<Progress.Context>{(progress) => `${progress.value} of ${progress.max}`}</Progress.Context>
			</Progress.ValueText>
		</Progress>
	);
}
