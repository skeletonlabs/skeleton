import { Progress } from '@skeletonlabs/skeleton-react';

export default function Dir() {
	return (
		<Progress dir="rtl">
			<Progress.Label>Label</Progress.Label>
			<Progress.Track>
				<Progress.Range />
			</Progress.Track>
		</Progress>
	);
}
