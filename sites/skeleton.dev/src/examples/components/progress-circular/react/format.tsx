import { Progress } from '@skeletonlabs/skeleton-react';

export default function Format() {
	return (
		<Progress className="items-center w-fit" formatOptions={{ style: 'decimal' }}>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
			<Progress.ValueText />
		</Progress>
	);
}
