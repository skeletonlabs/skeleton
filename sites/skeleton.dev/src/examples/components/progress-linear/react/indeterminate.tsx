import { ProgressLinear } from '@skeletonlabs/skeleton-react';

export default function () {
	return (
		<ProgressLinear value={null}>
			<ProgressLinear.Track>
				<ProgressLinear.Range />
			</ProgressLinear.Track>
		</ProgressLinear>
	);
}
