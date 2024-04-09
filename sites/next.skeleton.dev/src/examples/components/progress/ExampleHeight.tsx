import { Progress } from '@skeletonlabs/skeleton-react';

export const Page = () => {
	return (
		<div className="flex flex-col gap-8 w-full">
			<Progress value={50} max={100} />
			<Progress value={50} max={100} height="h-4" />
			<Progress value={50} max={100} height="h-8" />
		</div>
	);
};
