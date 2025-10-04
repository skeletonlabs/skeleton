import { Progress } from '@skeletonlabs/skeleton-react';

export default function CenteredContent() {
	return (
		<Progress className="w-fit relative">
			<div className="absolute inset-0 flex items-center justify-center">
				<Progress.ValueText />
			</div>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
		</Progress>
	);
}
