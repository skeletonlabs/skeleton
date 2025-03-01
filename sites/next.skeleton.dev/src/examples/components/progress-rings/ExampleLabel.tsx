import { ProgressRing } from "@skeletonlabs/skeleton-react";

export const Page = () => {
	return (
		<div className="grid grid-cols-1 gap-4 justify-center">
			<ProgressRing value={25} max={100} showLabel />
		</div>
	);
};
