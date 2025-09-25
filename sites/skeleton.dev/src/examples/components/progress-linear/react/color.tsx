import { ProgressLinear } from '@skeletonlabs/skeleton-react';

export default function Color() {
	return (
		<div className="flex w-full flex-col gap-8">
			<ProgressLinear>
				<ProgressLinear.Track>
					<ProgressLinear.Range className="bg-primary-500" />
				</ProgressLinear.Track>
			</ProgressLinear>
			<ProgressLinear>
				<ProgressLinear.Track>
					<ProgressLinear.Range className="bg-secondary-500" />
				</ProgressLinear.Track>
			</ProgressLinear>
			<ProgressLinear>
				<ProgressLinear.Track>
					<ProgressLinear.Range className="bg-tertiary-500" />
				</ProgressLinear.Track>
			</ProgressLinear>
		</div>
	);
}
