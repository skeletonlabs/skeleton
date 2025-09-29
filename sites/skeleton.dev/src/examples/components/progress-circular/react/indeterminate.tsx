import { Progress } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Progress className="items-center w-fit" value={null}>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
			<Progress.ValueText />
		</Progress>
	);
}
