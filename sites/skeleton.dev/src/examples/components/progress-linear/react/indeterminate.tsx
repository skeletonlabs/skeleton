import { ProgressLinear } from '@skeletonlabs/skeleton-react';

export default function Indeterminate() {
	return (
		<ProgressLinear value={undefined}>
			<ProgressLinear.Track>
				<ProgressLinear.Range />
			</ProgressLinear.Track>
		</ProgressLinear>
	);
}
