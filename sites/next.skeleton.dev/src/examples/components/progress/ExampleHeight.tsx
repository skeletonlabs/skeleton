import { Progress } from '@skeletonlabs/skeleton-react';

export default () => {
	return (
		<div className="flex flex-col gap-8 w-full">
			<Progress value={50} />
			<Progress value={50} height="h-4" />
			<Progress value={50} height="h-8" />
		</div>
	);
};
