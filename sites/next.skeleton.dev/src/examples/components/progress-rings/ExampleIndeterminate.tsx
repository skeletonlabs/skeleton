import { ProgressRing } from "@skeletonlabs/skeleton-react";

export const Page = () => {
	return (
		<ProgressRing
			value={null}
			size="size-14"
			meterStroke="stroke-tertiary-600-400"
			trackStroke="stroke-tertiary-50-950"
		/>
	);
};
