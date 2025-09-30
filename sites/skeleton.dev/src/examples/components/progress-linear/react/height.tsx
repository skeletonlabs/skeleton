import { Progress } from '@skeletonlabs/skeleton-react';

export default function Height() {
	return (
		<div className="flex w-full flex-col gap-8">
			<Progress>
				<Progress.Track className="h-1">
					<Progress.Range />
				</Progress.Track>
			</Progress>
			<Progress>
				<Progress.Track className="h-4">
					<Progress.Range />
				</Progress.Track>
			</Progress>
			<Progress>
				<Progress.Track className="h-6">
					<Progress.Range />
				</Progress.Track>
			</Progress>
		</div>
	);
}
