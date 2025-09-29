import { Progress } from '@skeletonlabs/skeleton-react';

export default function CustomFormat() {
	return (
		<Progress
			className="items-center w-fit"
			translations={{
				value(details) {
					return `${details.value} of ${details.max}`;
				},
			}}
		>
			<Progress.Circle style={{ ['--size' as string]: '4rem', ['--thickness' as string]: '0.5rem' }}>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
			<Progress.ValueText />
		</Progress>
	);
}
