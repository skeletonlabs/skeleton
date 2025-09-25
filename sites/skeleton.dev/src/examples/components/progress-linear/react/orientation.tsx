import { ProgressLinear } from '@skeletonlabs/skeleton-react';

export default function Orientation() {
	return (
		<ProgressLinear orientation="vertical">
			<ProgressLinear.Track>
				<ProgressLinear.Range />
			</ProgressLinear.Track>
		</ProgressLinear>
	);
}
