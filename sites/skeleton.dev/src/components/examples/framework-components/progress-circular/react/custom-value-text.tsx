import { Progress } from '@skeletonlabs/skeleton-react';

export default function CustomValueText() {
	return (
		<Progress className="items-center w-fit">
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
			<Progress.ValueText>
				<Progress.Context>{(progress) => `${progress.value} of ${progress.max}`}</Progress.Context>
			</Progress.ValueText>
		</Progress>
	);
}
