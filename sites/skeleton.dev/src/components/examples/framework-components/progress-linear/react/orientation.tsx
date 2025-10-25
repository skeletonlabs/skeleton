import { Progress } from '@skeletonlabs/skeleton-react';

export default function Orientation() {
	return (
		<Progress orientation="vertical">
			<Progress.Track>
				<Progress.Range />
			</Progress.Track>
		</Progress>
	);
}
