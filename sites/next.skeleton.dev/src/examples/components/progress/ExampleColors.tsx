import { Progress } from '@skeletonlabs/skeleton-react';

export const Page = () => {
	return (
		<div className="flex flex-col gap-8 w-full">
			<Progress value={50} max={100} meterBg="bg-primary-500" />
			<Progress value={50} max={100} meterBg="bg-secondary-500" />
			<Progress value={50} max={100} meterBg="bg-tertiary-500" />
		</div>
	);
};
