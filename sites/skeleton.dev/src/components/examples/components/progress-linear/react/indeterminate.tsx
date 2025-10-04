import { Progress } from '@skeletonlabs/skeleton-react';

export default function Indeterminate() {
	return (
		<Progress value={null}>
			<Progress.Track>
				<Progress.Range />
			</Progress.Track>
		</Progress>
	);
}
