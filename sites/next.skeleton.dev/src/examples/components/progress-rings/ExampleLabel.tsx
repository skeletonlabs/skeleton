import { ProgressRing } from '@skeletonlabs/skeleton-react';

export const Page = () => {
	return (
		<div className="grid grid-cols-1 justify-center gap-4">
			<ProgressRing value={25} max={100} showLabel />
		</div>
	);
};
