import { Progress } from '@skeletonlabs/skeleton-react';

export default function Size() {
	return (
		<div className="flex gap-4 justify-evenly items-center w-full">
			<Progress value={75} className="w-fit">
				<Progress.Circle className="[--size:--spacing(16)]">
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
			</Progress>
			<Progress value={75}>
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
			</Progress>
			<Progress value={75} className="w-fit">
				<Progress.Circle className="[--size:--spacing(32)]">
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
			</Progress>
		</div>
	);
}
