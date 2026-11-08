import { Progress } from "@skeletonlabs/skeleton-react";

export default function Color() {
	return (
		<div className="flex w-full items-center justify-evenly gap-4">
			<Progress value={40} className="w-fit">
				<Progress.Circle>
					<Progress.CircleTrack className="stroke-primary-50-950" />
					<Progress.CircleRange className="stroke-primary-500" />
				</Progress.Circle>
			</Progress>
			<Progress value={40} className="w-fit">
				<Progress.Circle>
					<Progress.CircleTrack className="stroke-secondary-50-950" />
					<Progress.CircleRange className="stroke-secondary-500" />
				</Progress.Circle>
			</Progress>
			<Progress value={40} className="w-fit">
				<Progress.Circle>
					<Progress.CircleTrack className="stroke-tertiary-50-950" />
					<Progress.CircleRange className="stroke-tertiary-500" />
				</Progress.Circle>
			</Progress>
		</div>
	);
}
