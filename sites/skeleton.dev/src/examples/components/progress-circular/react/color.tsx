import { Progress } from '@skeletonlabs/skeleton-react';

export default function Size() {
	return (
		<div className="flex gap-4 justify-evenly items-center w-full">
			<Progress className="w-fit">
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange className="stroke-primary-500" />
				</Progress.Circle>
			</Progress>
			<Progress className="w-fit">
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange className="stroke-secondary-500" />
				</Progress.Circle>
			</Progress>
			<Progress className="w-fit">
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange className="stroke-tertiary-500" />
				</Progress.Circle>
			</Progress>
		</div>
	);
}
