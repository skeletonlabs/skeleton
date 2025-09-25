import { ProgressLinear } from '@skeletonlabs/skeleton-react';

export default function Height() {
	return (
		<div className="flex w-full flex-col gap-8">
			<ProgressLinear>
				<ProgressLinear.Track className="h-1">
					<ProgressLinear.Range />
				</ProgressLinear.Track>
			</ProgressLinear>
			<ProgressLinear>
				<ProgressLinear.Track className="h-4">
					<ProgressLinear.Range />
				</ProgressLinear.Track>
			</ProgressLinear>
			<ProgressLinear>
				<ProgressLinear.Track className="h-6">
					<ProgressLinear.Range />
				</ProgressLinear.Track>
			</ProgressLinear>
		</div>
	);
}
