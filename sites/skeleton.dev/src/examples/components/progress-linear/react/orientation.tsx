import { ProgressLinear } from '@skeletonlabs/skeleton-react';

export default function () {
	return (
		<ProgressLinear orientation="vertical">
			<ProgressLinear.Track>
				<ProgressLinear.Range />
			</ProgressLinear.Track>
		</ProgressLinear>
	);
}
