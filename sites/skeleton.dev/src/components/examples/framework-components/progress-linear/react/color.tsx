import { Progress } from '@skeletonlabs/skeleton-react';

export default function Color() {
	return (
		<div className="flex w-full flex-col gap-8">
			<Progress>
				<Progress.Track>
					<Progress.Range className="bg-primary-500" />
				</Progress.Track>
			</Progress>
			<Progress>
				<Progress.Track>
					<Progress.Range className="bg-secondary-500" />
				</Progress.Track>
			</Progress>
			<Progress>
				<Progress.Track>
					<Progress.Range className="bg-tertiary-500" />
				</Progress.Track>
			</Progress>
		</div>
	);
}
