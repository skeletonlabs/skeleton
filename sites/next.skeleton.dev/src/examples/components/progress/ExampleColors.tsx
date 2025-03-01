import { Progress } from "@skeletonlabs/skeleton-react";

export const Page = () => {
	return (
		<div className="flex w-full flex-col gap-8">
			<Progress value={50} max={100} meterBg="bg-primary-500" />
			<Progress value={50} max={100} meterBg="bg-secondary-500" />
			<Progress value={50} max={100} meterBg="bg-tertiary-500" />
		</div>
	);
};
