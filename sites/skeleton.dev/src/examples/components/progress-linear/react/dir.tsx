import { ProgressLinear } from '@skeletonlabs/skeleton-react';

export default function Dir() {
	return (
		<ProgressLinear dir="rtl">
			<ProgressLinear.Label>Label</ProgressLinear.Label>
			<ProgressLinear.Track>
				<ProgressLinear.Range />
			</ProgressLinear.Track>
		</ProgressLinear>
	);
}
