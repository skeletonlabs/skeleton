import { Progress } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Progress>
			<Progress.Label>
				<Progress.ValueText />
			</Progress.Label>
			<Progress.Track>
				<Progress.Range />
			</Progress.Track>
		</Progress>
	);
}
