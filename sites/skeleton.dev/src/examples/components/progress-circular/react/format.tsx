import { Progress } from '@skeletonlabs/skeleton-react';

export default function Format() {
	return (
		<div className="flex gap-4 justify-evenly items-center w-full">
			<Progress className="items-center w-fit" formatOptions={{ style: 'percent' }}>
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
				<Progress.ValueText />
			</Progress>
			<Progress className="items-center w-fit" formatOptions={{ style: 'decimal' }}>
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
				<Progress.ValueText />
			</Progress>
			<Progress className="items-center w-fit" formatOptions={{ style: 'currency', currency: 'EUR' }}>
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
				<Progress.ValueText />
			</Progress>
		</div>
	);
}
