import { ProgressLinear } from '@skeletonlabs/skeleton-react';

export default function () {
	return (
		<ProgressLinear>
			<ProgressLinear.Label>Progress:</ProgressLinear.Label>
			<ProgressLinear.Track>
				<ProgressLinear.Range />
			</ProgressLinear.Track>
		</ProgressLinear>
	);
}
