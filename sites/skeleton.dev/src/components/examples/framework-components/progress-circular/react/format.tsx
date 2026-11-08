import { Progress } from "@skeletonlabs/skeleton-react";

export default function Format() {
	return (
		<div className="flex w-full items-center justify-evenly gap-4">
			<Progress className="w-fit items-center" formatOptions={{ style: "percent" }}>
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
				<Progress.ValueText />
			</Progress>
			<Progress className="w-fit items-center" formatOptions={{ style: "decimal" }}>
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
				<Progress.ValueText />
			</Progress>
			<Progress
				className="w-fit items-center"
				formatOptions={{ style: "currency", currency: "EUR" }}
			>
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
				<Progress.ValueText />
			</Progress>
		</div>
	);
}
