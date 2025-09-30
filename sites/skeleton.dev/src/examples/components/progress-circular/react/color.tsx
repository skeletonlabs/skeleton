import { Progress } from '@skeletonlabs/skeleton-react';

export default function Color() {
	return (
		<div className="flex gap-4 justify-evenly items-center w-full">
			<Progress value={40} className="w-fit">
				<Progress.Circle>
					<Progress.CircleTrack className="stroke-primary-500/30" />
					<Progress.CircleRange className="stroke-primary-500" />
				</Progress.Circle>
			</Progress>
			<Progress value={40} className="w-fit">
				<Progress.Circle>
					<Progress.CircleTrack className="stroke-secondary-500/30" />
					<Progress.CircleRange className="stroke-secondary-500" />
				</Progress.Circle>
			</Progress>
			<Progress value={40} className="w-fit">
				<Progress.Circle>
					<Progress.CircleTrack className="stroke-tertiary-500/30" />
					<Progress.CircleRange className="stroke-tertiary-500" />
				</Progress.Circle>
			</Progress>
		</div>
	);
}
